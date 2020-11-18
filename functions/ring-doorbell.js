const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const CryptoJS = require("crypto-js");

exports.handler = async function(event, context) {
  return client.messages
  .create({
     body: 'Ding dong',
     from: process.env.TWILIO_PHONE_NUMBER,
     to: `+1${CryptoJS.AES.decrypt(JSON.parse(event.body).number, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8)}`
   })
  .then(message => ({
    statusCode: 200,
    body: JSON.stringify(message.sid)
  }))
}