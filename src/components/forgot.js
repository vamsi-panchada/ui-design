import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const Form1 = () => {
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
      <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          {/* <Col sm="10"> */}
            <Form.Control 
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email" />
          {/* </Col> */}
          
          </Form.Group>
          
          <Button variant="dark" type="submit">Submit</Button>

        </Form>
      // <form onSubmit={handleSubmit}>
      //   <input
      //     type="email"
      //     name="email"
      //     value={email}
      //     onChange={handleChange}
      //     placeholder="Email"
      //   /><br />
      //   {/* <button type="submit">Submit</button> */}
      //   <Button variant="dark" type="submit">Submit</Button>
      // </form>
      
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
          <img src='forgot-logo.png' />
            Forgot Password
            </p>
            <Form1 />
            <p> Go back to <a href='/'>login</a></p>
            <div className='footer'>
              <p><img className='crayonlogo' src='crayon-logo.png' />
                <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p></p>
                
                
            </div>
      </div>
    );
  }
}