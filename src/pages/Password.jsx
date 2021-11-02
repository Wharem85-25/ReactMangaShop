import React from 'react';
import '@styles/Pasword.scss';

import logo from '@img/logo.png';

const Password = () => {
	return (
		<div className="Password">
			<div className="form-container">
				<img src={logo} className="password-logo" alt="Logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for you account</p>
				<form action="/" className="form">
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="********" className="input input-password" />
					<label for="new-password" className="label">New Password</label>
					<input type="password" id="new-password" placeholder="********" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default Password;
