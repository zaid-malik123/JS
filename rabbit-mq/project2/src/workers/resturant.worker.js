import amqplib from "amqplib";
import {  ORDER_EXCHANGE, RESTURANT_QUEUE } from "../constants/constant.js";

async function resturantWorker() {

    try {

        const connection = await amqplib.connect("amqp://guest:guest@localhost:5672");

        const channel = await connection.createChannel();

        await channel.assertExchange(ORDER_EXCHANGE, "fanout" ,{
            durable: true
        })

        await channel.assertQueue(RESTURANT_QUEUE, {
            durable: true
        })

        await channel.bindQueue(RESTURANT_QUEUE, ORDER_EXCHANGE, "")

        console.log("Resturant queue is waiting for new order");

        channel.consume(RESTURANT_QUEUE, async (msg) => {
            const order = JSON.parse(msg.content.toString());

            console.log(`new order for restaurant \n ${JSON.stringify(order)}`)
            channel.ack(msg)
        })



        
    } catch (error) {
        console.log(error)
    }
    
} resturantWorker()