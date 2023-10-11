import React, { Component, useState } from 'react';
import "./request.css";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [password, setPassword] = useState("");
    const [email_copy, setEmailCopy] = useState();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === "name") {
        setName(value);
      } else if (name === "email") {
        setEmail(value);
      } else if (name === "reason") {
        setReason(value);
      } else if (name === "password") {
        setPassword(value);
      } else if (name === "email_copy") {
        setEmailCopy(value);
      } 
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Validate the form data
        if (!name || !email) {
          return alert("Please enter your name and email address.");
        }
      
        // Submit the form data to a server
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("reason", reason);
        formData.append("password", password);
        formData.append('sendEmailCopy', email_copy);
      
        fetch("/submit-Request", {
          method: "POST",
          body: formData,
        }).then((response) => {
          
        });
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        /><br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        /><br />
        <input
          type="text"
          name="reason"
          value={reason}
          onChange={handleChange}
          placeholder="Reson for request"
        /><br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
        /><br />
        <input
          type="checkbox"
          name="email_copy"
          value={email_copy}
          onChange={handleChange}
          placeholder="email_copy"
        />Send me a email copy<br />
        <input type="submit" />
      </form>
    );
  };


export default class Register extends Component {
  render() {
    return (
      <div class='register'>
        <div className='header'>
            <img class='mayalogo' src="maya-logo.png" /><br />
            <p class='logotext'>
                AI powered personalization engine dedicated to understanding human tastes
            </p><br />
        </div>
        
        <div>
            <img src='request-logo.png'/>
            <p class='requstaccess'>
            Request for access
            </p>
        </div>
            <Form />
            <div className='footer'>
                <img className='crayonlogo' src='crayon-logo.png' />
                <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p>
                
            </div>
      </div>
    );
  }
}