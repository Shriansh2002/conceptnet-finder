# ConceptNet Finder

ConceptNet Finder is a web application that allows users to explore the ConceptNet knowledge graph, which is a large semantic network that represents general knowledge in a machine-readable format. With ConceptNet Finder, users can search for concepts and explore their relationships in the knowledge graph, as well as analyze text and extract concepts and relationships.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Features](#features)
-   [Technologies](#technologies)
-   [Contributing](#contributing)

## Installation

To install ConceptNet Finder, you will need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your system.Once you have those installed, you can follow these steps:

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/shriansh2002/conceptnet-finder.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Navigate to http://localhost:5173 in your web browser.

## Usage

To use ConceptNet Finder, simply enter a search query in the search bar at the top of the page. You can search for any concept that you are interested in, and the application will display a graph showing the relationships between that concept and other related concepts in the knowledge graph.

You can click on any node in the graph to view more information about that concept, including its definition, related concepts, and relationships to other concepts.

In addition to exploring the knowledge graph, you can also use ConceptNet Finder to analyze text. Simply enter a piece of text in the text analysis tool on the home page, and the application will automatically identify the concepts and relationships present in the text.

## Features

Some of the features of ConceptNet Finder include:

-   Search for concepts and explore their relationships in the knowledge graph.
-   View detailed information about concepts, including their definition, related concepts, and relationships to other concepts.
-   Analyze text and extract concepts and relationships automatically.
-   Navigate the graph easily using the zoom and pan controls.
-   Filter the graph to show only relevant nodes and edges.

## Technologies

ConceptNet Finder is built using the following technologies:

-   [React](https://reactjs.org) - A JavaScript library for building user interfaces.
-   [React Router](https://reactrouter.com/) - A routing library for React applications.
-   [ConceptNet API](https://conceptnet.io/) - A RESTful API for accessing the ConceptNet knowledge graph.
-   [Vite](https://vitejs.dev/) - A build tool for modern web applications.

## Contributing

Contributions to ConceptNet Finder are always welcome! If you have an idea for a new feature or improvement, please open an issue on the GitHub repository or submit a pull request.
