import React from 'react';
import '@styles/SendEmail.scss'

import logo from '@img/logo.png';
import email from '@img/email.png';

const SendEmail = () => {
	return (
		<div class="SendEmail">
			<div class="form-container">
				<img src={logo} class="send-email-logo" alt="Logo" />
				<h1 class="title">Email has been sent!</h1>
				<p class="subtitle">Please cheak your inbox for instructions on how to reset the password</p>
				<div class="email-image">
					<img src={email} alt="email" />
				</div>
				<button class="primary-button login-button">Login</button>
				<p class="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
};

export default SendEmail;
