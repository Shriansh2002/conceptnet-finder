import { useState, Fragment, useEffect, useMemo } from 'react';
import axios from 'axios';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import SearchResultComponent from '../components/SearchResultComponent';
import Graph from '../components/Graph';

// Lottie
import Lottie from 'react-lottie';

function HomePage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searched, setSearched] = useState(false);
	const [graphData, setGraphData] = useState([]);

	const [animationData, setAnimationData] = useState(null);

	const defaultOptions = useMemo(
		() => ({
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		}),
		[animationData]
	);

	useEffect(() => {
		fetch('https://assets6.lottiefiles.com/packages/lf20_2n0sgc.json')
			.then((response) => response.json())
			.then((data) => setAnimationData(data));
	}, []);

	const handleSearch = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.get(
				`https://api.conceptnet.io/c/en/${searchTerm.toLowerCase()}?limit=20`
			);
			setSearchResults(response.data.edges);
			setGraphData(response.data.edges); // setting graph data here
			setSearched(true);
		} catch (error) {
			console.error(error);
		}
		setIsLoading(false);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<main className="flex-1">
				<div className="container mx-auto p-4 flex-1 mt-16 mb-12">
					<div className="flex items-center mb-8">
						<div className="relative flex-1">
							<form onSubmit={handleSearch}>
								<input
									type="text"
									placeholder="Search ConceptNet"
									className="py-2 px-4 border border-gray-400 rounded-l-md w-full"
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
								/>
								{searchTerm && (
									<button
										type="button"
										className="absolute top-0 right-0 bottom-0 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4"
										onClick={() => setSearchTerm('')}
									>
										x
									</button>
								)}
								<button type="submit" className="sr-only">
									Search
								</button>
							</form>
						</div>

						<button
							className={`bg-blue-500 hover:bg-blue-600 border border-blue-500 hover:border-blue-600 text-white font-semibold py-2 px-4 rounded-r-md ${
								!searchTerm
									? 'opacity-50 cursor-not-allowed'
									: ''
							}`}
							onClick={handleSearch}
							disabled={!searchTerm}
						>
							Search
						</button>
					</div>

					{!searched && !isLoading && (
						<Lottie
							options={defaultOptions}
							height={300}
							width={300}
						/>
					)}

					{isLoading && <Loader />}

					{searchResults.length === 0 && !isLoading && searched && (
						<div className="text-center text-gray-500">
							<p className="text-2xl">No results found</p>
							<p className="text-xl">
								Try searching for something else
							</p>
						</div>
					)}

					{!isLoading && searchResults.length > 0 && (
						<Fragment>
							<SearchResultComponent
								searchResults={searchResults}
							/>
							<Graph data={graphData} />
						</Fragment>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default HomePage;
