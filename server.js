const accountSid = "AC9198d014b9ecf686355425cfc8216252";
const authToken = "31eecca900ce34789de908fc489d1d51";
const twilio = require("twilio");
const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "Need urgent HELP!!!!",
    from: "+17693055216",
    to: "+916387619888",
  });

  console.log(message.body);
}

createMessage();
 