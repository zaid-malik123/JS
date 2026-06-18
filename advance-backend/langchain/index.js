import express, { response } from "express";
import dotenv from "dotenv";
import { ChatGroq } from "@langchain/groq";
import {
  Annotation,
  MessagesAnnotation,
  StateGraph,
} from "@langchain/langgraph";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { TavilySearch } from "@langchain/tavily";
import { ToolNode } from "@langchain/langgraph/prebuilt";

dotenv.config();

const app = express();

app.use(express.json());

// const StateAnnotation = Annotation.Root({
//   prompt: Annotation(),
//   aiMsg: Annotation(),
// });

const webSearchTool = new TavilySearch({
  maxResults: 5,
  topic: "general",
});

const tools = [webSearchTool];

const toolNode = new ToolNode(tools);

const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0,
}).bindTools(tools);

const llm = async (state) => {
  const response = await model.invoke(state.messages);

  return {
    messages: [response],
  };
};

const shouldContinue = (state) => {
  const lastMessage = state.messages[state.messages.length - 1];

  if (lastMessage.tool_calls.length > 0) {
    return "tools";
  } else {
    return "__end__";
  }
};

const graph = new StateGraph(MessagesAnnotation)
  .addNode("llm", llm)
  .addNode("tools", toolNode)
  .addEdge("__start__", "llm")
  .addEdge("tools", "llm")
  .addConditionalEdges("llm", shouldContinue)
  .compile();

app.post("/ai", async (req, res) => {
  const { content } = req.body;

  const result = await graph.invoke({
    messages: [new HumanMessage(content)],
  });

  res.status(200).json(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
