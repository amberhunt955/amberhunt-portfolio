import { Button } from "@mui/material";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          alert("Your email has been submitted.");
      }, (error) => {
          console.log(error.text);
          alert("Uh oh - your email has NOT been submitted. We apologize for the technical difficulties.");
      });
    }
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name:</label>
      <input type="text" name="user_name" />
      <label>Your Email:</label>
      <input type="email" name="user_email" />
      <label>Message:</label>
      <textarea name="message" rows="15" cols="50" required/>
      <Button variant="contained" type="submit" value="Send" >Submit</Button>
    </form>
  );
}

export default Form;
