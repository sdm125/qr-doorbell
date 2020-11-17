const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.handler = async function(event, context) {
  return client.messages
  .create({
     body: 'Ding dong',
     from: '+15177973455',
     to: JSON.parse(event.body.number)
   })
  .then(message => ({
    statusCode: 200,
    body: message.sid
  }))
}