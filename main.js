import { parseCSV } from './components/graphInput.js';
import { kruskals } from './algorithms/kruskals.js';
import { drawGraph, highlightEdges } from './components/visualizer.js';

document.getElementById('runBtn').addEventListener('click', () => {
  const csvData = document.getElementById('csvInput').value;
  const graph = parseCSV(csvData);
  drawGraph(graph);

  const selectedAlgo = document.getElementById('algoSelector').value;

  if (selectedAlgo === 'kruskal') {
    const mst = kruskals(graph);
    highlightEdges(graph, mst);
  }
});
