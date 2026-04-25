class SingleLinkedList {
  size;
  head;
  tail;
  constructor() {
    this.size = 0;
    this.data = null;
  }

  addFirst(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      //this same as head === null
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.setNext(this.head);
      this.head = newNode;
    }
    this.size++;
  }

  addLast(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      //this same as head === null
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
    this.size++;
  }

  addIndex(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("index out of bounds");
    }

    if (index === 0) {
      this.addFirst(value);
    } else if (index === this.size) {
      this.addLast(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.getNext();
      }
      newNode.setNext(current.getNext());
      current.setNext(newNode);
      this.size++;
    }
  }

    removeFirst() {
        if(this.size === 0){
            throw new Error("List is empty");
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        this.head = this.head.getNext();
        this.size--;
        if(this.size === 0){
            this.tail = null;
        }
    }


    removeLast(){
        if(this.size === 0){
            throw new Error("List is empty");
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        let current = this.head;
        for(let i = 0; i < this.size - 2; i++){
            current = current.getNext();
        }
        current.setNext(null);
        this.tail = current;
        this.size--;
    }

    removeIndex(index){
        if(index < 0 || index >= this.size){
            throw new Error("index out of bounds");
        }
        if(index === 0) {
            this.removeFirst();
            return;
        }
        if(index === this.size - 1){
            this.removeLast();
            return;
        }
        let current = this.head;
        for(let i = 0; i < index - 1; i++){
            current = current.getNext();
        }
        current.setNext(current.getNext().getNext());
        this.size--;
    }

    
}

