import express from "express";
import dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {

    res.status(200).json({
        message: `hello guys from ${process.env.SERVERNAME}`
    })

})

app.listen(PORT , () => {
    console.log(`server is running on ${PORT}`)
})
