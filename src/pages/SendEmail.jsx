import React from 'react';
import '@styles/SendEmail.scss'

import logo from '@img/logo.png';
import email from '@img/email.png';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={logo} className="send-email-logo" alt="Logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please cheak your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
};

export default SendEmail;
