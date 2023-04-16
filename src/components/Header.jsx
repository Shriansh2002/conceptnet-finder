import React from 'react';

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full bg-blue-500 text-white py-4 z-50">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<a href="/" className="hover:text-gray-200">
					<h1 className="text-xl font-bold">ConceptNet Finder</h1>
				</a>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<a href="/" className="hover:text-gray-200">
								Home
							</a>
						</li>
						<li>
							<a href="/about" className="hover:text-gray-200">
								About
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
