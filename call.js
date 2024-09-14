const twilio = require("twilio");

const accountSid = "AC9198d014b9ecf686355425cfc8216252";
const authToken = "31eecca900ce34789de908fc489d1d51";
const client = twilio(accountSid, authToken);

const callSOS = (req, res) => {
  client.messages
    .create({
      body: "Need urgent HELP!!!!",
      from: "+17693055216", // Your Twilio registered number
      to: "+916387619888", // Destination number
    })
    .then((message) => res.json({ success: true, message: message.sid }))
    .catch((error) => {
      console.error("Error sending SOS:", error.message);
      res.status(500).json({
        success: false,
        error: "Error sending SOS. Please try again.",
      });
    });
};

module.exports = callSOS;
