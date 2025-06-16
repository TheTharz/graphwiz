export function kruskals(graph) {
  const { edges, nodes } = graph;
  const sorted = [...edges].sort((a, b) => a.weight - b.weight);
  const parent = {};
  const find = (u) => (parent[u] === u ? u : (parent[u] = find(parent[u])));
  const union = (u, v) => (parent[find(u)] = find(v));

  nodes.forEach((n) => (parent[n] = n));

  const mst = [];
  for (let e of sorted) {
    if (find(e.from) !== find(e.to)) {
      mst.push(e);
      union(e.from, e.to);
    }
  }
  return mst;
}
