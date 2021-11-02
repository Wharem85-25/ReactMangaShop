import React from 'react';
import '../assets/styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div class="MyAccount">
			<div class="myaccount-form-container">
				<h1 class="title">My account</h1>
				<form action="/" class="form">
					<div>
						<label for="name" class="label">Name</label>
						<p class="value">Ains Valenstain</p>
						<label for="email" class="label">Email</label>
						<p class="value">ains@example.com</p>
						<label for="password" class="label">Password</label>
						<p class="value">**********</p>
					</div>
				<input type="submit" value="Edit" class="secondary-button login-button"/>
				</form>
			</div>
		</div>
	);
};

export default MyAccount;
