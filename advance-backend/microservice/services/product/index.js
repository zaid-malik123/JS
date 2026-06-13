import express from "express"
import dotenv from "dotenv";

dotenv.config()
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {

    res.status(200).json({
        message: "hello from product service"
    })

})


const PORT = process.env.PORT || 2003;
app.listen(PORT, () => {
    console.log(`product server is running on port ${PORT}`)
})