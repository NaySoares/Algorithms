class PriorityQueue {
  constructor() {
    this.heap = [];
    this.positions = new Map();
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  parent(i) { return Math.floor((i - 1) / 2); }
  left(i)   { return 2 * i + 1; }
  right(i)  { return 2 * i + 2; }

  swap(i, j) {
    const a = this.heap[i];
    const b = this.heap[j];
    this.heap[i] = b;
    this.heap[j] = a;
    this.positions.set(a.node, j);
    this.positions.set(b.node, i);
  }

  heapifyUp(idx) {
    while (idx > 0) {
      const p = this.parent(idx);
      if (this.heap[idx].priority < this.heap[p].priority) {
        this.swap(idx, p);
        idx = p;
      } else break;
    }
  }

  heapifyDown(idx) {
    const n = this.heap.length;
    while (true) {
      let smallest = idx;
      const l = this.left(idx);
      const r = this.right(idx);

      if (l < n && this.heap[l].priority < this.heap[smallest].priority) smallest = l;
      if (r < n && this.heap[r].priority < this.heap[smallest].priority) smallest = r;

      if (smallest !== idx) {
        this.swap(idx, smallest);
        idx = smallest;
      } else break;
    }
  }

  enqueue(node, priority) {
    if (this.positions.has(node)) {
      // decrease-key: atualiza prioridade se for menor
      const idx = this.positions.get(node);
      if (priority < this.heap[idx].priority) {
        this.heap[idx].priority = priority;
        this.heapifyUp(idx);
      }
      return;
    }
    const entry = { node, priority };
    this.heap.push(entry);
    const idx = this.heap.length - 1;
    this.positions.set(node, idx);
    this.heapifyUp(idx);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const root = this.heap[0];
    const last = this.heap.pop();
    this.positions.delete(root.node);
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.positions.set(last.node, 0);
      this.heapifyDown(0);
    }
    return root;
  }
}

export default PriorityQueue;