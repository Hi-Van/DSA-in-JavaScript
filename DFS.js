//DFS for BST class
preOrderDFS() {
    let curr = this.root;
    let data = [];


    function traverse(node) {
        data.push(node.val);

        if (node.left) {
            traverse(node.left);
        }

        if (node.right) {
            traverse(node.right);
        }
    }

    return data;
}

postOrderDFS() {
    let data = [];


    function traverse(node) {
        if (node.left) {
            traverse(node.left);
        }

        if (node.right) {
            traverse(node.right);
        }

        data.push(node.val);
    }

    traverse(this.root);
    return data;
}

inOrderDFS() {
    let curr = this.root;
    let data = [];


    function traverse(node) {
        if (node.left) {
            traverse(node.left);
        }

        data.push(node.val);

        if (node.right) {
            traverse(node.right);
        }
    }

    traverse(this.root);
    return data;
}

reverseOrderDFS() {
    let curr = this.root;
    let data = [];


    function traverse(node) {
        if (node.right) {
            traverse(node.right);
        }

        data.push(node.val);

        if (node.left) {
            traverse(node.left);
        }
    }

    traverse(this.root);
    return data;
}