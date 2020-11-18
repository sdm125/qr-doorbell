const CryptoJS = require("crypto-js");

exports.handler = async function(event, context) {
  const decryptedNumber = CryptoJS.AES.decrypt(`${JSON.parse(event.body).number_encrypted}`, process.env.CRYPTO_KEY).toString();
  const res = {decrypted_number: decryptedNumber}
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}