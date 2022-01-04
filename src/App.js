import React from 'react'
import firebase from './firebase'

class App extends React.Component {
  // To handle the change in the inputs for mobile phone and access code
  handleChange = (e) => {
    const {name, value} = e.target
    // Re-render component with the updated state
    this.setState({
        [name]: value
      })
  }
  // Use invisible reCAPTCHA with Firebase
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSubmitPhoneNumber();
        console.log("reCAPTCHA verified.") // for testing
      },
      defaultCountry: "US"
    });
  }
  // Send a random 6-digit access code with Firebase upon receiving the phone number
  onSubmitPhoneNumber = (e) => {
    // Prevent a browser reload/refresh
    e.preventDefault()

    this.configureCaptcha()
    const phoneNumber = "+1" + this.state.mobile // default: US mobile number
    console.log(phoneNumber) // for checking the phone number in the console
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("Access code has been sent.")
        }).catch((error) => {
          // Error; SMS not sent
          console.log("Error: Fail to send access code.")
        });
  }
  // Verify the access code with Firebase upon receiving the access code
  onSubmitAccessCode = (e) => {
    // Prevent a browser reload/refresh
    e.preventDefault()

    const code = this.state.accesscode
    console.log(code) // for checking the access code in the console
    window.confirmationResult.confirm(code).then((result) => {
      // Access code is correct, success.
      const user = result.user;
      console.log(JSON.stringify(user)) // for testing
      alert("Access code verified.")
    }).catch((error) => {
      // Wrong access code, failure.
      alert("Wrong access code, please try again.")
    });
  }
  render() {
    return (
      <div>
        <h2>Enter phone number:</h2>
        <form onSubmit={this.onSubmitPhoneNumber}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Your phone number here" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>

        <h2>Enter access code:</h2>
        <form onSubmit={this.onSubmitAccessCode}>
          <input type="number" name="accesscode" placeholder="Your access code here" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App
