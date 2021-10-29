import React from 'react';
import '../assets/styles/Menu.scss';

const Menu = () => {
	return (
		<div class="Menu">
		<ul>
			<li>
				<a href="/" class="title">My order</a>
			</li>
			<li>
				<a href="/">My account</a>
			</li>
			<li>
				<a href="/" class="title">Sign out</a>
			</li>
		</ul>
	</div>
	);
};

export default Menu;
