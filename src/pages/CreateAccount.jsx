import React from 'react';
import '@styles/CreateAccount.scss'

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="form-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="nane" className="label">Name</label>
						<input type="text" id="name" placeholder="Ains" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="********" className="input input-password" />
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
