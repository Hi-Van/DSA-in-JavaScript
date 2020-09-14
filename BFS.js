//BFS for BST class
bfs() {
    let curr = this.root;
    let data = [];
    let queue = [];

    queue.push(curr);
    while (queue.length) {
        curr = queue.shift();
        data.push(curr.val);

        if (curr.left) {
            queue.push(curr.left);
        }

        if (curr.right) {
            queue.push(curr.right);
        }
    }

    return data;
}