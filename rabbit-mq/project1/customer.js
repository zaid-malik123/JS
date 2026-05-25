import amqplib from "amqplib";

let channel;
let connection;

async function rabbitMqConnection() {
  try {
    connection = await amqplib.connect("amqp://guest:guest@localhost:5672");
    channel = await connection.createChannel();
    console.log("rabbit mq connection successfull");

    await channel.assertQueue("book-ride", {
      durable: true,
    });

    const data = {
      name: "zaid",
      email: "zaid@gmail.com",
      location: "Noida sector 15",
    };

    const ride = Buffer.from(JSON.stringify(data));

    await channel.sendToQueue("book-ride", ride, {
      persistent: true,
    });

    console.log("Ride booking Done !!!");

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}

function getChannel() {
  if (!channel) {
    throw new Error("Channel does not exist");
  }

  return channel;
}

rabbitMqConnection();
