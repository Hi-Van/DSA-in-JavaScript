class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let temp = new Node(val);
        if (!this.head) {
            this.head = temp;
            this.tail = this.head;
        }

        else {
            this.tail.next = temp;
            this.tail = temp;
        }

        this.length++;
        return this;
    }

    dequeue() {
        let temp = this.head;
        if (!temp) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.head = this.head.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }
}