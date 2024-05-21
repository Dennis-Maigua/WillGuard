const nodemailer = require('nodemailer');

exports.generateOTP = () => {    
    let otp = '';    
    for(let i=0; i<=3; i++) {
        const randVal = Math.round(Math.random() * 9);
        otp = otp + randVal;
    }
    return otp;
};

exports.mailTransport = () => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD
        }
      });
      
    return transport;
};

exports.verifyEmailTemplate = code => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <style>
                @media only screen and (max-width: 620px) {
                    h1 {
                        font-size: 20px;
                        padding: 5px;
                    }
                }
                .container {
                    max-width: 620px;
                    margin: 0 auto;
                    font-family: sans-serif;
                    text-align: center;
                    color: #272727;
                }
                .title {
                    background: #f6f6f6;
                    padding: 10px;
                }
                .otp {
                    width: 80px;
                    margin: 0 auto;
                    font-weight: bold;
                    background: #f6f6f6;
                    border-radius: 5px;
                    font-size: 25px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="title"> Verify Email </h1>
                <p> Please enter the following OTP code to verify your email: </p>
                <p class="otp"> ${code} </p>
                <br>
                <p> For security purposes, the verification code will expire in 1 hour or after first use! </p>
            </div>
        </body>
    </html>
    `;
};

exports.welcomeEmailTemplate = (heading, message) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <style>
                @media only screen and (max-width: 620px) {
                    h1 {
                        font-size: 20px;
                        padding: 5px;
                    }
                }
                .container {
                    max-width: 620px;
                    margin: 0 auto;
                    font-family: sans-serif;
                    text-align: center;
                    color: #272727;
                }
                .title {
                    background: #f6f6f6;
                    padding: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="title"> ${heading} </h1>
                <p> ${message} </p>
                <br>
                <p> Thank you and feel free to contact us for more information! </p>
            </div>
        </body>
    </html>
    `;
};

exports.resetPasswordTemplate = url => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <style>
                @media only screen and (max-width: 620px) {
                    h1 {
                        font-size: 20px;
                        padding: 5px;
                    }
                }
                .container {
                    max-width: 620px;
                    margin: 0 auto;
                    font-family: sans-serif;
                    text-align: center;
                    color: #272727;
                }
                .title {
                    background: #f6f6f6;
                    padding: 10px;
                }
                a {
                    margin: 0 auto;
                    padding: 20px;
                    background: #e63946;
                    border-radius: 5px;
                    font-size: 20px 10px;
                    color: #fff;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="title"> Reset Password </h1>
                <p> Please click the reset link below to change your password: </p>
                <a href="${url}"> Reset Password </a>
                <br>
                <p> Ignore this email if you did not initiate this request! </p>
            </div>
        </body>
    </html>
    `;
};

exports.resetSuccessTemplate = (heading, message) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <style>
                @media only screen and (max-width: 620px) {
                    h1 {
                        font-size: 20px;
                        padding: 5px;
                    }
                }
                .container {
                    max-width: 620px;
                    margin: 0 auto;
                    font-family: sans-serif;
                    text-align: center;
                    color: #272727;
                }
                .title {
                    background: #f6f6f6;
                    padding: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="title"> ${heading} </h1>
                <p> ${message} </p>
                <br>
                <p> Contact our support via email for any issues or concerns! </p>
            </div>
        </body>
    </html>
    `;
};