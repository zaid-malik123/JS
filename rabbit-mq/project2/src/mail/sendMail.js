import createTransporter from "./transporter.js";

const sendEmail = async (
    to,
    subject,
    text
) => {

    try {

        const transporter = createTransporter();

        const info = await transporter.sendMail({

            from: "mzaidmalik25@gmail.com",

            to,

            subject,

            text

        });

        console.log(
            "📩 Email Sent:",
            info.messageId
        );

    } catch (error) {

        console.log(
            "❌ Email Error",
            error
        );

    }

};

export default sendEmail;