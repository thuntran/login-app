// Code to handle form submissions

const phoneForm = document.getElementById('phone-form');
const verifyForm = document.getElementById('verify-form');
const responseText = document.getElementById('response-text');

let phoneNumber;

// Listen to the `submit` event on the #phone-form, make a POST request to 
// the /send-notification backend endpoint, with the value of the phone number
phoneForm.addEventListener('submit', async e => {
    e.preventDefault();
  
    phoneNumber = document.getElementById('phone-number-input').value;
  
    const response = await fetch('http://localhost:3000/send-notification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({phoneNumber : phoneNumber })
    }).catch(e => console.log(e));
  
    if (response.ok) {
      phoneForm.style.display = 'none';
      verifyForm.style.display = 'block';
    }
});

// Listen to the `submit` event on the #verify-form, make a POST request to 
// the /verify-otp backend endpoint, with the value of both the phone number 
// and access code
verifyForm.addEventListener('submit', async e => {
    e.preventDefault();
  
    const otp = document.getElementById('otp-input').value;
  
    const data = {
      phoneNumber: phoneNumber, 
      otp: otp
    };
  
    const response = await fetch('http://localhost:3000/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    }).catch(e => console.log(e));
  
    const check = await response.json();
  
    const text = response.ok ? check.status : response.statusText;
    responseText.innerHTML = text;
  
    verifyForm.style.display = 'none';
    responseText.style.display = 'block';  
});
  