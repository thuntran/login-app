// This backend endpoint receives the user's phone number, and send
// the access code via SMS to the phone number via Twiolio Verify API
exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
  
    client.verify.services(context.VERIFY_SERVICE_SID)
      .verifications
      .create({to: `+${event.phoneNumber}`, channel: 'sms', locale: 'en'})
      .then(verification => console.log(verification.status))
      .catch(e => {
        console.log(e)
        return callback(e)
      });
  
    return callback(null);
  }
  