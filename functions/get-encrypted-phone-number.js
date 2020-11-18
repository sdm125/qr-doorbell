const CryptoJS = require("crypto-js");

exports.handler = async function(event, context) {
  const encryptedNumber = CryptoJS.AES.encrypt(`${JSON.parse(event.body).number}`, process.env.CRYPTO_KEY).toString();
  const res = {encrypted_number: encryptedNumber}
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}