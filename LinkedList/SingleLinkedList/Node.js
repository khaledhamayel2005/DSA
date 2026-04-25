class Node{
    value;
    next;
    constructor(value){
        this.value = value;
        this.next = null;
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

    
}

