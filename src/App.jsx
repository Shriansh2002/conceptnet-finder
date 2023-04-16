import { useState } from 'react';
import axios from 'axios';

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
			<div className="flex items-center mb-4">
				<input
					type="text"
					placeholder="Search ConceptNet"
					className="py-2 px-4 border border-gray-400 rounded-l-md flex-1"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-600 border border-blue-500 hover:border-blue-600 text-white font-semibold py-2 px-4 rounded-r-md"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>

			{isLoading && (
				<div className="flex justify-center items-center h-24">
					<svg
						className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					<span className="text-blue-500 text-lg">Loading...</span>
				</div>
			)}

			{!isLoading && searchResults.length > 0 && (
				<SearchResultComponent searchResults={searchResults} />
			)}
		</div>
	);
}

export default App;

const SearchResultComponent = ({ searchResults }) => {
	return (
		<div className="overflow-x-auto">
			<table className="table-auto w-full">
				<thead>
					<tr className="bg-gray-50 border-b">
						<th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Source
						</th>
						<th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Target
						</th>
						<th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Relation
						</th>
						<th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Weight
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{searchResults.map((result) => (
						<tr
							key={result.id}
							className="hover:bg-gray-100 transition-colors duration-200"
						>
							<td className="border px-4 py-2 text-sm">
								{result.start.label}
							</td>
							<td className="border px-4 py-2 text-sm">
								{result.end.label}
							</td>
							<td className="border px-4 py-2 text-sm">
								{result.rel.label}
							</td>
							<td className="border px-4 py-2 text-sm">
								{result.weight}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
