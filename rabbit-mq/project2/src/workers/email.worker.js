import amqplib from "amqplib";
import { EMAIL_QUEUE, ORDER_EXCHANGE } from "../constants/constant.js";
import sendEmail from "../mail/sendMail.js";

async function emailWorker() {

    try {

        const connection = await amqplib.connect("amqp://guest:guest@localhost:5672");

        const channel = await connection.createChannel();

        await channel.assertExchange(ORDER_EXCHANGE, "fanout" ,{
            durable: true
        })

        await channel.assertQueue(EMAIL_QUEUE, {
            durable: true
        })

        await channel.bindQueue(EMAIL_QUEUE, ORDER_EXCHANGE, "")

        console.log("Email queue is waiting for sending the email ");

        channel.consume(EMAIL_QUEUE, async (msg) => {
            const order = JSON.parse(msg.content.toString());

            await sendEmail({
                to: order.email,
                subject: "Order confirmed",
                text: "Order confirmation mail"
            })

            console.log("sending mail done")
            channel.ack(msg)
        })


        
    } catch (error) {
        console.log(error)
    }
    
} emailWorker()