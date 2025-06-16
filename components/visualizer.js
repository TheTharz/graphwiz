export function drawGraph(graph) {
  const canvas = document.getElementById('graphCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const { nodes, edges } = graph;

  const positions = {};
  const radius = 200;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const angleGap = (2 * Math.PI) / nodes.length;

  nodes.forEach((node, i) => {
    const angle = i * angleGap;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    positions[node] = { x, y };
  });

  // draw edges
  edges.forEach((e) => {
    const from = positions[e.from];
    const to = positions[e.to];
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();

    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    ctx.fillStyle = 'black';
    ctx.font = '14px sans-serif';
    ctx.fillText(e.weight, midX, midY);
  });

  // draw nodes
  nodes.forEach((node) => {
    const { x, y } = positions[node];
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#0077cc';
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(node, x, y);
  });

  canvas._nodePositions = positions;
}

export function highlightEdges(graph, mst) {
  const canvas = document.getElementById('graphCanvas');
  const ctx = canvas.getContext('2d');
  const pos = canvas._nodePositions;

  mst.forEach((e) => {
    const from = pos[e.from];
    const to = pos[e.to];
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  });
}
