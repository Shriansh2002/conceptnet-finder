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
						<li className="group">
							<a href="/" className="relative">
								Home
								<div className="absolute bottom-0 left-0 w-0 bg-white h-0.5 opacity-0 duration-500 transition-all group-hover:w-full group-hover:opacity-100" />
							</a>
						</li>
						<li className="group">
							<a href="/about" className="relative">
								About
								<div className="absolute bottom-0 left-0 w-0 bg-white h-0.5 opacity-0 duration-500 transition-all group-hover:w-full group-hover:opacity-100" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
