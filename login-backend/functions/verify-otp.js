// This backend endpoint receives both the user's phone number and
// access code, and verify whether the access code is correct with
// the Twilio Verify API
exports.handler = async function(context, event, callback) {
    const client = context.getTwilioClient();
  
    const check = await client.verify.services(context.VERIFY_SERVICE_SID)
      .verificationChecks
      .create({to: `+${event.phoneNumber}`, code: event.otp})
      .catch(e => {
        console.log(e)
        return callback(e)
      });
    
    const response = new Twilio.Response();
    response.setStatusCode(200);
    response.appendHeader('Content-Type', 'application/json');
    response.setBody(check);
  
    return callback(null, response);
  }
  