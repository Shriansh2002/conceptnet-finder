import { useState } from 'react';
import axios from 'axios';

// Components
import SearchResultComponent from './components/SearchResultComponent';
import Loader from './components/Loader';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleSearch = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				`https://api.conceptnet.io/c/en/${searchTerm}?limit=20`
			);
			setSearchResults(response.data.edges);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex items-center mb-8">
				<div className="relative flex-1">
					<input
						type="text"
						placeholder="Search ConceptNet"
						className="py-2 px-4 border border-gray-400 rounded-l-md w-full"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					{searchTerm && (
						<button
							className="absolute top-0 right-0 bottom-0 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4"
							onClick={() => setSearchTerm('')}
						>
							x
						</button>
					)}
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-600 border border-blue-500 hover:border-blue-600 text-white font-semibold py-2 px-4 rounded-r-md"
					onClick={handleSearch}
					disabled={!searchTerm}
				>
					{searchResults.length === 0 ? 'Search' : 'Search Again'}
				</button>
			</div>

			{isLoading && <Loader />}

			{!isLoading && searchResults.length > 0 && (
				<SearchResultComponent searchResults={searchResults} />
			)}
		</div>
	);
}

export default App;
