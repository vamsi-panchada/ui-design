import React, { Component, useState } from 'react';
import "./forgotResponse.css";

export default class ForgotResonse extends Component {
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

        <div className='responseMessage'>
            <p>Email has been sent to your inbox (srinivasan@crayondata.com) with magic link to reset your credential.</p>
                <p>Reset magic link is valid for next 30 minutes</p>
        </div>

        <p>Click here to <a href='/reset'>set password</a></p>
        <div className='footer'>
            <img className='crayonlogo' src='crayon-logo.png' />
            <p>2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai</p>
        </div>
      </div>
    );
  }
}