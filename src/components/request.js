import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./request.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';


const Form1 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [password, setPassword] = useState("");
    const [email_copy, setEmailCopy] = useState();
    const navigate = useNavigate();
  
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

        // console.log('Submitted');
      
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


        navigate('/submit-request');
      };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          {/* <Col sm="10"> */}
            <Form.Control 
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Full Name" />
          {/* </Col> */}
          
          </Form.Group>

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

          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Reason for Request</Form.Label>
          {/* <Col sm="10"> */}
            <Form.Control 
              as="textarea"
              row={5}
              name="reason"
              value={reason}
              onChange={handleChange}
              placeholder="Brief your requirementa & Approval.." />
          {/* </Col> */}
          
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Check 
            type="checkbox"
                name="email_copy"
                value={email_copy}
                onChange={handleChange}
                placeholder="email_copy"
            /> <Form.Label>Send me a email Copy</Form.Label>
            
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
             <Button variant="dark" type="submit">Submit</Button>
          </Form.Group>
         

          
      </Form>
      // <form onSubmit={handleSubmit}>
      //   <input
      //     type="text"
      //     name="name"
      //     value={name}
      //     onChange={handleChange}
      //     placeholder="Name"
      //   /><br />
      //   <input
      //     type="email"
      //     name="email"
      //     value={email}
      //     onChange={handleChange}
      //     placeholder="Email"
      //   /><br />
      //   <input
      //     type="text"
      //     name="reason"
      //     value={reason}
      //     onChange={handleChange}
      //     placeholder="Reson for request"
      //   /><br />
      //   <input
      //     type="text"
      //     name="password"
      //     value={password}
      //     onChange={handleChange}
      //     placeholder="password"
      //   /><br />
      //   <input
      //     type="checkbox"
      //     name="email_copy"
      //     value={email_copy}
      //     onChange={handleChange}
      //     placeholder="email_copy"
      //   />Send me a email copy<br />
      //   {/* <input type="submit" /> */}
      //   <Button variant="dark" type="submit">Submit</Button>
      // </form>
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
            <Form1 />
            <div className='footer'>
                <img className='crayonlogo' src='crayon-logo.png' />
                <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p>
                
            </div>
      </div>
    );
  }
}