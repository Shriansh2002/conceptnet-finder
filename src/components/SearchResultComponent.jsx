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
					{searchResults.map((result, _idx) => (
						<tr
							key={_idx}
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

export default SearchResultComponent;
