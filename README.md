# Basic Login App

A basic login application that takes in a phone number, sends a random 6-digit code to the phone number received, and verifies whether the access code entered is correct. 

The default mobile country code is +1 (United States).

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and use [Firebase](https://firebase.google.com/) for backend and database.

## Structure of the Project

This is a React app that was created using `create-react-app`. 

- The content of the app, including titles, input fields and submit buttons, is stored under `src/App.js`. Approriate chunks of code from [Firebase](https://firebase.google.com/) documentation for access code authentication purposes are also included in `src/App.js`.

- The Firebase configuration for the app is stored under `src/firebase.js`.

## Running the App

Make sure the `npm` has already been installed to your local machine by checking the current version of `npm`:

### `npm -v`

If `npm` has not been installed, install `npm` using:

### `npm install -g npm`

After the project is cloned into your local machine, in your terminal, under the project directory `login-app`, run the React app using:

### `npm start`

This will run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. You will see something like this:

# <img alt="UI" src="images/app.png" height="600" width="800">

Enter your phone number in the first field (without a country code, the default is +1). Click "Submit", and a 6-digit access code will be sent to your phone number. Here is an example:

# <img alt="verify" src="images/access-code.png" height="800" width="370">

Go back to your browser and enter the access code that you received, then click "Submit". 

If the code is correct, you will see an alert on the browser saying "Access code verified". Otherwise, you will see the alert "Wrong access code, please try again." from your browser.


