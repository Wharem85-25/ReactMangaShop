import React from 'react'
import '../assets/styles/Recovery.scss';

const Recovery = () => {
	return (
		<div className="Recovery">
			<div className="form-container">
				<img src="../src/assets/img/logo.png" className="logo" alt="Logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please cheak your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src="../src/assets/img/email.png" alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default Recovery;
