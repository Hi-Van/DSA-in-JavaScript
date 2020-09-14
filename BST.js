class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;

    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let temp = new Node(val)
        if (!this.root) {
            this.root = temp;
            return this
        }
        else {
            let curr = this.root;
            while (true) {
                if (val < curr.val) {
                    if (!curr.left) {
                        curr.left = temp;
                        return this;
                    }
                    else {
                        curr = curr.left;
                    }
                }

                if (val >= curr.val) {
                    if (!curr.right) {
                        curr.right = temp;
                        return this;
                    }

                    else {
                        curr = curr.right;
                    }
                }
            }
        }
    }

    find(val) {
        let curr = this.root;
        let found = false;

        if (!this.root) {
            return false;
        }

        while (current && !found) {
            if (val < current.val) {
                curr = curr.left;
            }

            if (val > curr.val) {
                curr = curr.right;
            }

            else {
                found = true;
            }
        }

        if (found) {
            return curr;
        }

        else {
            return undefined;
        }
    }
}