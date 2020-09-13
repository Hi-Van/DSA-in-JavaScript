class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let curr = this.head
        while (curr) {
            console.log(curr)
            curr = curr.next
        }
    }

    push(val) {
        let temp = new Node(val)
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

    pop() {
        if (!this.head) {
            return undefined;
        }

        else {
            let curr = this.head;
            let prev;

            while (curr.next) {
                prev = curr;
                curr = curr.next;
            }

            prev.next = null;
            this.tail = prev;
            this.length--;
            return curr;
        }
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        else {
            let temp = this.head;
            this.head = this.head.next;
            this.length--;
            return temp;
        }
    }

    unshift(val) {
        let temp = new Node(val);
        if (!this.head) {
            this.head = temp;
            this.tail = this.head;
        }

        else {
            let hold = this.head;
            this.head = temp;
            this.head.next = hold;
        }
        this.length++;
        return this;
    }

    get(index) {
        if ((index > this.length) || (index < 0)) {
            return null
        }

        else {
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }

            return curr;
        }
    }

    set(index, val) {
        let target = this.get(index);
        if (target) {
            target.val = val
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(val);
        }

        if (index === this.length) {
            this.push(val);
        }

        let place = new Node(val);
        let temp = this.get(index - 1);
        place.next = temp.next;
        temp.next = place;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length) {
            return this.pop();
        }

        let temp = this.get(index - 1);
        let result = this.get(index);
        temp.next = result.next;
        this.length--;
        return result;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let nextNode;
        let prevNode = null;

        for (let i = 0; i < this.length; i++) {
            let nextNode = temp.next;
            temp.next = prevNode;
            prevNode = temp;
            temp = nextNode;
        }

        return this;
    }
}