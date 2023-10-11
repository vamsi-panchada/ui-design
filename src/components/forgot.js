import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";


const Form = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === "email") {
        setEmail(value);
      }
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log('Submitted');
      
        // Validate the form data
        if (!email) {
          return alert("Please enter your email address.");
        }
      
        // Submit the form data to a server
        const formData = new FormData();
        formData.append("email", email);


        navigate('/submit-forgot');
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        /><br />
        <button type="submit">Submit</button>
      </form>
      
    );
  };

export default class Forgot extends Component {
  render() {
    return (
      <div class='register'>
        <div className='header'>
            <img class='mayalogo' src="maya-logo.png" /><br />
            <p class='logotext'>
                AI powered personalization engine dedicated to understanding human tastes
            </p><br />
        </div>
        <p class='requstaccess'>
            Forgot Password
            </p>
            <Form />
            <p>Go back to <a href='/'>login</a></p>
            <div className='footer'>
              <p><img className='crayonlogo' src='crayon-logo.png' />
                <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p></p>
                
                
            </div>
      </div>
    );
  }
}