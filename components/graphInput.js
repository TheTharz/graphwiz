export function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const edges = [];
  const nodes = new Set();

  for (let line of lines) {
    const [from, to, weightStr] = line.trim().split(',');
    const weight = parseInt(weightStr);
    if (!from || !to || isNaN(weight)) continue;
    edges.push({ from, to, weight });
    nodes.add(from);
    nodes.add(to);
  }

  return {
    nodes: Array.from(nodes),
    edges,
  };
}
