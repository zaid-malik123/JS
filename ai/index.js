// import { GoogleGenAI } from "@google/genai";

// async function main() {

//     const ai = new GoogleGenAI({
//         apiKey: ""
//     });

//     const response = await ai.models.embedContent({
//         model: 'gemini-embedding-001',
//         contents: 'What is the meaning of life?',
//     });

//     console.log(response.embeddings[0].values);
// }

// main();



// import { Pinecone } from "@pinecone-database/pinecone";

// async function run() {

//   const pc = new Pinecone({ apiKey: '' });


//   const index = pc.index("zaid")

//   const records = [
//     {
//       id: "rec1",
//       values: Array(768).fill(0.5),
//       metadata: {
//         text: "3 ghante lag gye iss error ko solve karne me ",
//         category: "error solve hogya "
//       }
//     }
//   ];

//   console.log(records.length); // debug

//   const res = await index.upsert({
//     records: records
//   });

//   console.log("DATA SAVED SUCCESSFULLY ");
// }

// run();

// import winston from "winston";

// // 1️⃣ Custom colors for levels
// winston.addColors({
//   info: 'green',
//   warn: 'yellow',
//   error: 'red'
// });

// // 2️⃣ Create logger
// const logger = winston.createLogger({
//   level: 'info', // default minimum level
//   format: winston.format.combine(
//     winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // timestamp
//     winston.format.printf(({ timestamp, level, message }) => {
//       return `${timestamp} [${level.toUpperCase()}]: ${message}`;
//     })
//   ),
//   transports: [
//     // 3️⃣ Console transport with colors
//     new winston.transports.Console({
//       format: winston.format.combine(
//         winston.format.colorize({ all: true }) // colors enable
//       )
//     }),
//     // 4️⃣ File transport (normal text, no color)
//     new winston.transports.File({ filename: 'logs/app.log' })
//   ]
// });

// export default logger;

// import winston from "winston";

// const logger = winston.createLogger({

//   level: "info",
//   format: winston.format.combine(
//     winston.format.timestamp()
//   ),

//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({filename: "logs/app.log"})
//   ]

// })

// export default logger;