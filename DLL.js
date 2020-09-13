class Node {
    constructor(val) {
        this.val = val
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let curr = this.head;
        while (curr) {
            console.log(curr);
            curr = curr.next;
        }
    }

    push(val) {
        let temp = new Node(val);
        if (!this.head) {
            this.head = temp;
            this.tail = this.head;
        }

        else {
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }

        this.length++;
        return this;
    }

    pop() {
        let temp = this.tail;
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    shift() {
        let temp = this.head;

        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    unshift(val) {
        let temp = new Node(val);

        if (!this.head) {
            this.head = temp;
            this.tail = this.head;
        }

        else {
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }

        this.length++;
        return this;
    }

    get(index) {
        let target;
        let count;
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index <= this.length / 2) {
            target = this.head;
            count = 0;
            while (count != index) {
                target = target.next;
                count++;
            }

            return target;
        }

        else {
            target = this.tail;
            count = this.length - 1;
            while (count != index) {
                target = target.prev;
                count--;
            }

            return target;
        }
    }

    set(index, val) {
        let temp = this.get(index)

        if (!temp) {
            return false;
        }

        else {
            temp.val = val;
            return true;
        }
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

        else {
            let temp = new Node(val);
            let after = this.get(index);
            let before = this.get(index - 1);
            after.prev = temp;
            before.next = temp;
            temp.prev = before;
            temp.next = after;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (this.index === this.length - 1) {
            return this.pop();
        }

        else {
            let target = this.get(index);
            target.prev.next = target.next;
            target.next.prev = target.prev;
            target.next = null;
            target.prev = null;
            this.length--;
            return target;
        }
    }
}