import nodemailer from "nodemailer";

const createTransporter = () => {

    return nodemailer.createTransport({

        service: "gmail",

        auth: {
            user: "mzaidmalik25@gmail.com",
            pass: "osggpllyjhajyenj"
        }

    });

};

export default createTransporter;