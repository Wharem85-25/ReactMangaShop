import React from 'react';
import '../assets/styles/Login.scss';

const Login = () => {
	return (
		<div class="Login">
			<div class="form-container">
				<img src="../src/assets/img/logo.png" class="logo" alt="Logo"/>
				<form action="/" class="form">
					<label for="email" class="label">Email address</label>
					<input type="text" id="email" placeholder="@example.com" class="input input-email" />
					<label for="password" class="label">Password</label>
					<input type="password" id="password" placeholder="********" class="input input-password" />
					<input type="submit" value="Log in" class="primary-button login-button" />
					<a href="/">Forgot my password</a>
				</form>
				<button class="secondary-button signup-button">Sign op</button>
			</div>
		</div>
	);
};

export default Login;
