function calculateBreadthFirstSearch(begin, end) {
    const graph = new Graph();
    const bfs = new BreadthFirstSearch(graph);
    return bfs.search(begin, end);




    
}

BreadthFirstSearch(graph) {
    this.graph = graph;
}

BreadthFirstSearch.prototype.search = function(begin, end) {
    // ...
}

// Path: src/learn-patterns/factory/testCopilot.js
function calculateDijkstra(begin, end) {
    const graph = new Graph();
    const dijkstra = new Dijkstra(graph);
    return dijkstra.search(begin, end);
}

Dijkstra(graph) {
    this.graph = graph;
}

Dijkstra.prototype.search = function(begin, end) {
    // ...
}

// Path: src/learn-patterns/factory/testCopilot.js
function calculateAStar(begin, end) {
    const graph = new Graph();
    const aStar = new AStar(graph);
    return aStar.search(begin, end);
}

AStar(graph) {
    this.graph = graph;
}

AStar.prototype.search = function(begin, end) {
    // ...
}
```

###class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Usage
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');

console.log(g.bfs('A')); // ['A', 'B', 'C', 'D']class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Usage
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');

console.log(g.bfs('A')); // ['A', 'B', 'C', 'D']