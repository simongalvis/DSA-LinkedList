class _Node{
    constructor(value, next){
        value = this.value;
        next = this.next;
    }
   

}
class LinkedList{
    constructor(){
        this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

}

