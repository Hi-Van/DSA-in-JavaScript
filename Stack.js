class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = null;
    }

    push(val) {
        let temp = new Node(val);
        if (!this.head) {
            this.head = temp;
        }

        else {
            temp.next = this.head;
            this.head = temp;
        }

        this.length++;
        return this;
    }

    pop() {
        let temp = this.head;

        if (!temp) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
        }

        else {
            this.head = this.head.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }
}