import PriorityQueue from './priorityQueue.js';

function dijkstra (graph, start) {
  const distances = {};
  const visited = new Set();
  const previous = {}; // Auxiliar para construir o caminho
  const pq = new PriorityQueue();

  for (const node in graph) {
    distances[node] = Infinity; // Assume que todos os nós estão a uma distância infinita inicialmente
    previous[node] = null;
  }

  // O nó inicial tem distância 0 dele mesmo
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const item = pq.dequeue();
    if (!item) break; // Tratar possível null da implementação de PriorityQueue
    const node = item.node;

    if (visited.has(node)) continue;
    visited.add(node);

    for (const neighbor in graph[node]) {
      const weight = graph[node][neighbor];
      const newDistance = distances[node] + weight; // A distância total passando pelo nó atual.

      if (newDistance < distances[neighbor]) { // Se a nova distância for menor que a conhecida, atualiza.
        distances[neighbor] = newDistance;
        previous[neighbor] = node; // registra o nó anterior
        pq.enqueue(neighbor, newDistance);
      }
    }
  }

  return { distances, previous };
}

function getPath(previous, start, end) {
  const path = [];
  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  if (path[0] !== start) return null;

  return path;
}


// Grafo de exemplo
// O grafo é um objeto onde a chave é o nó e o valor são os vizinhos e seus pesos de aresta
const graph = {
  A: { B: 2, C: 5, D: 9 },
  B: { A: 2, C: 1, E: 4 },
  C: { A: 5, B: 1, D: 2, F: 7 },
  D: { A: 9, C: 2, F: 3, G: 10 },
  E: { B: 4, F: 1 },
  F: { C: 7, D: 3, E: 1, G: 2 },
  G: { D: 10, F: 2 }
};

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);
console.log('Distâncias a partir do nó', startNode, ':', distances);

const targetNode = 'F';
const path = getPath(previous, startNode, targetNode);
console.log('Caminho mais curto de', startNode, 'para', targetNode, ':', path);