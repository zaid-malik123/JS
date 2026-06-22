import express from "express";
import dotenv from "dotenv";
import { ChatGroq } from "@langchain/groq";
import fs from "fs";
import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const llm = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0,
});

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "gemini-embedding-001", 
  taskType: TaskType.RETRIEVAL_DOCUMENT,
  title: "Document title",
});

const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
  url: process.env.QDRANT_URL,
  collectionName: "langchainjs-testing",
});

const upload = async () => {
  const path = "./resume.pdf";
  const buffer = fs.readFileSync(path);
  const pdfTxt = new PDFParse(Uint8Array.from(buffer));
  const result = await pdfTxt.getText();

  const splitters = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
  })

  const docs = await splitters.createDocuments([result.text]);

  await vectorStore.addDocuments(docs)
};

// upload();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello",
  });
});

app.post("/ai", async (req, res) => {
  try {
    const { input } = req.body;

    const similaritySearch = await vectorStore.similaritySearch(input, 3)

    const context = similaritySearch.map(m => m.pageContent).join("/n");

    const response = await llm.invoke([
        new SystemMessage(
            `you are ai rag assistant you used only context knowledge do not use your own knowledge ${context} , if you not found any answer you say that i have no answer please check your question`
        ),
        new HumanMessage(input)
    ])
    
    res.status(200).json({
      message: response.content
    });

  } catch (error) {
    console.log(error.message);
  }
});

app.listen(8000, () => {
  console.log(`server is running on port 8000`);
});
