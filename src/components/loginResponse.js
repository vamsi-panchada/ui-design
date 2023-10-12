import React, { Component, useState } from 'react';
import "./loginResponse.css";

export default class LoginResonse extends Component {
  render() {
    return (
      <div class='register'>
        <div className='header'>
            <img class='mayalogo' src="maya-logo.png" /><br />
            <p class='logotext'>
                AI powered personalization engine dedicated to understanding human tastes
            </p><br />
        </div>

        <div className='responseMessage'>
            <p>you have succesfully logged in.</p>
        </div>

        <div className='footer'>
            <img className='crayonlogo' src='crayon-logo.png' />
            <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p>
        </div>
      </div>
    );
  }
}