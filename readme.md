# 📊 Graph Algorithm Visualizer

An interactive web application that allows you to **input graph data in CSV format** and **visualize graph algorithms** like **Kruskal's Minimum Spanning Tree (MST)**. Built with simple HTML, CSS, and JavaScript — no external frameworks — and designed to be modular and scalable.

## 🧠 Features

- ✅ CSV input for defining graphs
- ✅ Visualization on HTML5 canvas
- ✅ Kruskal's algorithm for MST
- 🔜 Modular support for other algorithms: Prim’s, Dijkstra, BFS, DFS
- 🔜 Animation support
- 🚀 Hosted with GitHub Pages

## 📁 Folder Structure

```

graph-algo-visualizer/
├── index.html # Main HTML structure
├── style.css # Basic styles
├── main.js # Entry point JS
│
├── components/
│ ├── graphInput.js # CSV parser
│ ├── visualizer.js # Canvas visualizer
│
├── algorithms/
│ └── kruskals.js # Kruskal's MST logic
│
├── assets/
│ └── sample.csv # Example CSV file
│ └── screenshot.png # Optional screenshot
└── README.md

```

## 🧾 CSV Input Format

Each line should be in the format:

```

source_node,destination_node,weight

```

### Example:

```

A,B,3
A,C,1
B,C,7
B,D,5
C,D,2

```

## 🛠️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/graph-algo-visualizer.git
   cd graph-algo-visualizer

   ```

2. Open `index.html` in your browser.

## 🌐 Hosting with GitHub Pages

1. Push to a public GitHub repository.
2. Go to **Settings > Pages**
3. Select `main` branch and `/ (root)` folder.
4. Your site will be available at:

```
https://thetharz.github.io/graphwiz/
```

## 🧩 Coming Soon

- [ ] Prim’s Algorithm
- [ ] Dijkstra’s Algorithm
- [ ] BFS / DFS
- [ ] Step-by-step animation
- [ ] Export as image

## 📜 License

This project is open-source and licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ by [Tharindu Imalka](https://github.com/thetharz)
