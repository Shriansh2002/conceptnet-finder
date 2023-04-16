import { useState } from 'react';
import axios from 'axios';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async () => {
		try {
			const response = await axios.get(
				`https://api.conceptnet.io/c/en/${searchTerm}?limit=25`
			);
			setSearchResults(response.data.edges);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex items-center">
				<input
					type="text"
					placeholder="Search ConceptNet"
					className="py-2 px-4 border border-gray-400 rounded-l-md flex-1"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
			{searchResults.length > 0 && (
				<table className="table-auto mt-4">
					<thead>
						<tr>
							<th className="px-4 py-2">Source</th>
							<th className="px-4 py-2">Target</th>
							<th className="px-4 py-2">Relation</th>
							<th className="px-4 py-2">Weight</th>
						</tr>
					</thead>
					<tbody>
						{searchResults.map((result) => (
							<tr key={result.id}>
								<td className="border px-4 py-2">
									{result.start.label}
								</td>
								<td className="border px-4 py-2">
									{result.end.label}
								</td>
								<td className="border px-4 py-2">
									{result.rel.label}
								</td>
								<td className="border px-4 py-2">
									{result.weight}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default App;
