import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-200 text-gray-700 py-4 fixed w-full bottom-0 right-0">
			<div className="container mx-auto px-4">
				<p className="text-center">
					&copy; {new Date().getFullYear()} ConceptNet Search. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
