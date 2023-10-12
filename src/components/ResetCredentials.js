import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ResetCredentials.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Form1 = () => {
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === "cpassword") {
        setCPassword(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log('Submitted');
      
        // Validate the form data
        if (!(password === cpassword)) {
          return alert("Password matches with confirm password.");
        }
      
        // Submit the form data to a server
        const formData = new FormData();
        formData.append("password", password);


        navigate('/home');
      };
  
    return (
      <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>New Passoword</Form.Label>
          {/* <Col sm="10"> */}
            <Form.Control 
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="password" />
          {/* </Col> */}
          
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Re-enter new password</Form.Label>
          {/* <Col sm="10"> */}
            <Form.Control 
              type="password"
              name="cpassword"
              value={cpassword}
              onChange={handleChange}
              placeholder="confirm Password" />
              
            {/* </Col> */}
          </Form.Group>
          <Button variant="dark" type="submit">Login</Button>

        </Form>
      // <form onSubmit={handleSubmit}>
      //   <input
      //     type="text"
      //     name="password"
      //     value={password}
      //     onChange={handleChange}
      //     placeholder="new password"
      //   /><br />
      //   <input
      //     type="password"
      //     name="cpassword"
      //     value={cpassword}
      //     onChange={handleChange}
      //     placeholder="confirm new password"
      //   /><br />
      //   {/* <button type="submit">Login</button> */}
      //   <Button variant="dark" type="submit">Login</Button>
      // </form>
      
    );
  };


export default class ResetCredentials extends Component {
  render() {
    return (
      <div class='register'>
        <div className='header'>
            <img class='mayalogo' src="maya-logo.png" /><br />
            <p class='logotext'>
                AI powered personalization engine dedicated to understanding human tastes
            </p><br />
        </div>
            <Form1 />
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