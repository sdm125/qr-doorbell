const CryptoJS = require("crypto-js");

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    encrypted_number: CryptoJS.AES.encrypt(JSON.parse(event.body).number, process.env.CRYPTO_KEY).toString()
  }
}