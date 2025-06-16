export function prims(graph) {
  const { nodes, edges } = graph;
  if (nodes.length === 0) return [];

  const mst = [];
  const visited = new Set();
  const edgeList = [];

  // Start from the first node
  const start = nodes[0];
  visited.add(start);

  // Add all edges connected to the start node
  edges.forEach((edge) => {
    if (edge.from === start || edge.to === start) {
      edgeList.push(edge);
    }
  });

  while (visited.size < nodes.length && edgeList.length > 0) {
    // Sort to find the minimum-weight edge that connects to an unvisited node
    edgeList.sort((a, b) => a.weight - b.weight);
    const smallest = edgeList.shift();

    const { from, to } = smallest;
    const nextNode = visited.has(from) ? to : from;

    if (!visited.has(nextNode)) {
      visited.add(nextNode);
      mst.push(smallest);

      // Add new edges from the newly added node
      for (const edge of edges) {
        if (
          (edge.from === nextNode && !visited.has(edge.to)) ||
          (edge.to === nextNode && !visited.has(edge.from))
        ) {
          edgeList.push(edge);
        }
      }
    }
  }

  return mst;
}
