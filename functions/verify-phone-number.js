const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const CryptoJS = require("crypto-js");

exports.handler = async function(event, context) {
  client.validationRequests
  .create({friendlyName: 'My Home Phone Number', phoneNumber: `+1${CryptoJS.AES.decrypt(JSON.parse(event.body).number, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8)}`})
  .then(validation_request => console.log(validation_request.friendlyName));
}