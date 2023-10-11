import React, { Component, useState } from 'react';
import "./RegiserResonse.css";

export default class RegisterResonse extends Component {
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
            <p>Thanks Srinivasan for your interest, We have requested admin to verify and approval. Watchout your email for welcome email with magic link for us.</p>
            <p>You can also write us at admin@maya.ai</p>
        </div>

        <a href='/forgotPassword'>Forgot Password</a>
        <a href='/regiser'>Register</a>

        <div className='footer'>
            <img className='crayonlogo' src='crayon-logo.png' />
            <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p>
        </div>
      </div>
    );
  }
}