class DoubleLinkedList{
    head;
    tail;
    length;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    // Getters and Setters
    getHead(){
        return this.head;
    }

    setHead(head){
        this.head = head;
    }

    getTail(){
        return this.tail;
    }

    setTail(tail){
        this.tail = tail;
    }

    getLength(){
        return this.length;
    }
    
    setLength(length){
        this.length = length;
    }


    append(value){
        const newNode = new Node(value);

        if(this.length === 0){ // same as !this.head
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            this.tail.setNext(newNode);
            newNode.setPrev(this.tail);
            this.tail = newNode;
            this.length++;
            
        }

        return this;
    }


    addFirst(value){
        const newNode = new Node(value);

        if(this.length ===0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            newNode.setNext(this.head);
            this.head.setPrev(newNode);
            this.head = newNode;
            this.length++;

        }
        return this;
    }


    removeLast(){
        if(this.length === 0) return undefined;
        
        const removedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = removedNode.getPrev();
            this.tail.setNext(null);
            removedNode.setPrev(null);
        }
        this.length--;
        return removedNode;
    }

    removeFirst(){
        if(this.length === 0) return undefined;
        
        const removedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = removedNode.getNext();
            this.head.setPrev(null);
            removedNode.setNext(null);
        }
        this.length--;
        return removedNode;
    }



    addIndex(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.addFirst(value);
        if(index === this.length) return !!this.append(value);
        
        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.getNext();
        beforeNode.setNext(newNode);
        newNode.setPrev(beforeNode);
        newNode.setNext(afterNode);
        afterNode.setPrev(newNode);
        this.length++;
        return true;
    }

    contains(value){    
        let current = this.head;
        while(current){
            if(current.getValue() === value) return true;
            current = current.getNext();
        }
        return false;
    }
    
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current;
        if(index <= this.length/2){
            current = this.head;
            for(let i = 0; i < index; i++){
                current = current.getNext();
            }
        }else{
            current = this.tail;
            for(let i = this.length - 1; i > index; i--){
                current = current.getPrev();
            }
        }
        return current;
    }
}