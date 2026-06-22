import express from "express";
import dotenv from "dotenv"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();



app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello"
    })
})


app.get(3000, () => {
    console.log(`server is running on port 3000`)
})