import amqplib from "amqplib";
import { ORDER_EXCHANGE } from "../constants/constant.js";

let connection;
let channel;


export const connectRabbitMq = async () => {

    connection = await amqplib.connect("amqp://guest:guest@localhost:5672");
    channel = await connection.createChannel();

    await channel.assertExchange(ORDER_EXCHANGE, "fanout", {
        durable: true
    })

    console.log("rabbit mq connection done !!")
}

export const getChannel = () => {
    if(!channel) {
        throw new Error("Channel not found")
    }
    return channel;
}
