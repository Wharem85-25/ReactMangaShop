import React from 'react';
import '../assets/styles/MobileMenu.scss';

const MobileMenu = () => {
	return (
		<div class="mobile-menu">
			<ul>
				<li>
					<a href="/">Categories</a>
				</li>
				<li>
					<a href="/">All</a>
				</li>
				<li>
					<a href="/">Shoujo</a>
				</li>
				<li>
					<a href="/">Shonen</a>
				</li>
				<li>
					<a href="/">Seinen</a>
				</li>
				<li>
					<a href="/">Spokon</a>
				</li>
				<li>
					<a href="/">Others</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/" class="email">wharem85@hotmail.com</a>
				</li>
				<li>
					<a href="/" class="sign-out">Sign out</a>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenu;
