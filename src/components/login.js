import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";


const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log('Submitted');
      
        // Validate the form data
        if (!password || !email) {
          return alert("Please enter your email address and password.");
        }
      
        // Submit the form data to a server
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);


        navigate('/home');
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
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
        /><br />
        <button type="submit">Login</button>
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
            <Form />
            <a href='/forgotPassword'>Forgot Password</a>
            <p>not a member ? <a href='/register'>request access</a></p>
            <div className='footer'>
              <p><img className='crayonlogo' src='crayon-logo.png' />
                <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p></p>
                
                
            </div>
      </div>
    );
  }
}