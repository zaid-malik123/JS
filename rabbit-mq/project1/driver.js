import amqplib from "amqplib";

const driverName = "driver"

const checkCustomer = async () => {
  let connection = await amqplib.connect("amqp://guest:guest@localhost:5672");
  let channel = await connection.createChannel();

  await channel.assertQueue("book-ride", {
    durable: true,
  });

  channel.consume("book-ride", (msg) => {
    const ride = JSON.parse(msg.content.toString());
    console.log(`\n🚨 [ALERT] New Ride Found for Driver ${driverName}!`);
    console.log(`   Passenger: ${ride.name} `);
    console.log(`   Pickup: ${ride.location}`);

    setTimeout(() => {
      console.log(
        `✅ [SUCCESS] Driver ${driverName} successfully accepted and completed Ride #${ride.rideId} for ${ride.customer}!`,
      );

      channel.ack(msg);
    }, 4000);
  });
};

checkCustomer()