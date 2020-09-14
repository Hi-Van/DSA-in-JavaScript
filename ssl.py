

class Node():
    def __init__(self,val):
        self.val = val
        self.next = None
    


class SinglyLinkedList(): 
    def __init__(self,val):
        self.head = None
        self.tail = None
        self.length = 0

    def traverse(self):
        curr = self.head
        while (curr): 
            print(curr)
            curr = curr.next


    def push(self, val):
        temp = Node(val)
        if self.head == None: 
            self.head = temp
            self.tail = self.head
        else: 
            self.tail.next = temp
            self.tail = temp
        
        self.length+= 1
        return self
    

    def pop(self): 
        if self.head == None: 
            return None
        

        else: 
            curr = self.head
            prev = None

            while curr.next:
                prev = curr
                curr = curr.next
            

            prev.next = None
            self.tail = prev
            self.length-=1
            return curr
        
    

    def shift(self):
        if self.head == None:
            return None
        

        else: 
            temp = self.head
            self.head = self.head.next
            self.length-=1
            return temp
        
    

    def unshift(self, val):
        temp = Node(val)
        if self.head == None: 
            self.head = temp
            self.tail = self.head
        

        else: 
            hold = self.head
            self.head = temp
            self.head.next = hold
        
        self.length+=1
        return self
    

    def get(self, index): 
        if index > self.length or index < 0: 
            return None
        else: 
            curr = self.head
            for i in index: 
                curr = curr.next
            return curr

    def setIndex(self, index, val): 
        target = self.get(index)
        if target: 
            target.val = val
            return True
        

        return False
    

    def insert(self, index, val): 
        if index < 0 or index > self.length: 
            return False
        

        if index == 0: 
            self.unshift(val)
        

        if index == self.length: 
            self.push(val)
        

        place = Node(val)
        temp = self.get(index - 1)
        place.next = temp.next
        temp.next = place
        self.length+=1
        return True
    

    def remove(self, index): 
        if index < 0 or index > self.length: 
            return False
        

        if index == 0:
            return self.shift()
        

        if index == self.length:
            return self.pop()
        

        temp = self.get(index - 1)
        result = self.get(index)
        temp.next = result.next
        self.length-=1
        return result
    

    def reverse(self): 
        temp = self.head
        self.head = self.tail
        self.tail = temp
        nextNode = None
        prevNode = None

        for i in range(self.length): 
            nextNode = temp.next
            temp.next = prevNode
            prevNode = temp
            temp = nextNode
        

        return self