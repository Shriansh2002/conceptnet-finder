import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<main className="flex-1">
				<div className="container mx-auto p-4 flex-1 mt-16 mb-12">
					<h1 className="text-4xl font-bold mb-4">About</h1>
					<div className="flex flex-col md:flex-row md:space-x-4">
						<div className="flex-1 text-justify">
							<p className="mb-4">
								Welcome to ConceptNet Finder, a powerful tool
								for exploring the ConceptNet knowledge graph.
								ConceptNet is a semantic network that represents
								general knowledge in a machine-readable format,
								allowing computers to understand human language
								and reasoning.
							</p>
							<p className="mb-4">
								With ConceptNet Finder, you can search for
								concepts and explore their relationships in the
								knowledge graph. Each concept is represented as
								a node, and the relationships between concepts
								are represented as edges. You can click on a
								node to view its related concepts, or click on
								an edge to view its details.
							</p>

							<p className="mb-4">
								In addition to exploring the knowledge graph,
								you can also use ConceptNet Finder to analyze
								text and extract concepts and relationships.
								Simply enter a piece of text, and the tool will
								automatically identify the concepts and
								relationships present in the text.
							</p>

							<p className="mb-4">
								ConceptNet Finder is a powerful tool for
								researchers, developers, and anyone interested
								in exploring and analyzing human language and
								reasoning. We hope you find it useful!
							</p>
						</div>
						<div className="flex-1">
							<img
								src="conceptnet-workflow.png"
								alt="Graph"
								className="rounded shadow-md aspect-square w-full h-auto"
								style={{ maxWidth: '600px' }}
							/>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default AboutPage;
