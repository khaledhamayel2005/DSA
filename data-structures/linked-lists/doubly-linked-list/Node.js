class Node{

     value;
     next;
     prev;

    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;

    }


    // Getters and Setters
    getValue(){
        return this.value;
    }

    setValue(value){
        this.value = value;
    }

    getNext(){
        return this.next;
    }

    setNext(next){
        this.next = next;
    }

    getPrev(){
        return this.prev;
    }

    setPrev(prev){
        this.prev = prev;
    }       

    

}