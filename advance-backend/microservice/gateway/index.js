import express from "express"
import dotenv from "dotenv";
import proxy from "express-http-proxy";

dotenv.config()
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {

    res.status(200).json({
        message: `hello from backend or gateway ${process.env.GATEWAY_NAME}`
    })

})

app.use("/auth", proxy("http://auth-service:7001"))
app.use("/order", proxy("http://order-service:7002"))
app.use("/product", proxy("http://product-service:7003"))

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`gateway server is running on port is ${PORT}`)
})