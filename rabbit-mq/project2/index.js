import express from "express";
import { connectDb } from "./src/db/db.js";
import Order from "./src/models/order.model.js";
import { connectRabbitMq, getChannel } from "./src/rabbitmq/connection.js";
import { ORDER_EXCHANGE } from "./src/constants/constant.js";

const app = express();


app.use(express.json());

app.post("/order" , async (req, res) => {

    const { name, email, order, address } = req.body;

    const createdOrder = await Order.create({
        email,
        name,
        order,
        address
    })

    const orderData = Buffer.from(JSON.stringify(createdOrder));

    const channel = getChannel();

    await channel.publish(ORDER_EXCHANGE, "", orderData);
    console.log(`🚀 [Exchange] Order #${createdOrder._id} published to exchange!`);
    
    return res.json({
        success: true,
        createdOrder
    })
})

const PORT = 8000;

app.listen(PORT, async () => {
    await connectDb();
    await connectRabbitMq()
    console.log("server is running on 8000")
})