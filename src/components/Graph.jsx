import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Graph(props) {
	const graphRef = useRef(null);

	useEffect(() => {
		const nodes = {};
		const links = [];

		props.data.forEach((edge) => {
			const source = edge.start.label;
			const target = edge.end.label;

			if (!nodes[source]) {
				nodes[source] = { name: source };
			}
			if (!nodes[target]) {
				nodes[target] = { name: target };
			}

			links.push({
				source: nodes[source],
				target: nodes[target],
			});
		});

		const width = graphRef.current.offsetWidth;
		const height = graphRef.current.offsetHeight;

		const simulation = d3
			.forceSimulation()
			.nodes(Object.values(nodes))
			.force(
				'link',
				d3
					.forceLink()
					.id((d) => d.name)
					.links(links)
			)
			.force('charge', d3.forceManyBody().strength(-100))
			.force('center', d3.forceCenter(width / 2, height / 2));

		const svg = d3
			.select(graphRef.current)
			.append('svg')
			.attr('viewBox', [0, 0, width, height]);

		const link = svg
			.append('g')
			.attr('stroke', '#999')
			.attr('stroke-opacity', 0.6)
			.selectAll('line')
			.data(links)
			.join('line')
			.attr('stroke-width', (d) => Math.sqrt(d.value));

		const node = svg
			.append('g')
			.attr('stroke', '#fff')
			.attr('stroke-width', 1.5)
			.selectAll('circle')
			.data(Object.values(nodes))
			.join('circle')
			.attr('r', 5)
			.attr('fill', '#69b3a2')
			.call(
				drag(simulation) // enable drag and drop
			);

		node.append('title').text((d) => d.name);

		simulation.on('tick', () => {
			link.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
		});

		function drag(simulation) {
			function dragStarted(event, d) {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				d.fx = d.x;
				d.fy = d.y;
			}

			function dragged(event, d) {
				d.fx = event.x;
				d.fy = event.y;
			}

			function dragEnded(event, d) {
				if (!event.active) simulation.alphaTarget(0);
				d.fx = null;
				d.fy = null;
			}

			return d3
				.drag()
				.on('start', dragStarted)
				.on('drag', dragged)
				.on('end', dragEnded);
		}
	}, [props.data]);

	return <div className="h-96  my-4 py-10" ref={graphRef}></div>;
}
export default Graph;
