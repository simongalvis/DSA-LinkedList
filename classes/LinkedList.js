const _Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item){
      if(this.head == null){
          this.insertFirst(item)
      }
      else{
          let tempNode = this.head;
          while(tempNode.next !== null){
            tempNode = tempNode.next;
          }
          tempNode.next = new _Node(item, null);
      }

  }
  insertBefore(item, itemToInsert){
      if(!this.head){
          return null;
      }
       if(this.head == null || this.head.value == item){
          this.insertFirst(itemToInsert)
          return;
      } 
    let currNode = this.head;
    console.log(this.head)
    let prevNode = this.head;
    while(currNode.value != item){
        prevNode = currNode;
        console.log("Prev nodeee: " + prevNode.value)
        currNode = currNode.next;
        console.log('Currnodeeeee: ' + currNode.value)
        console.log('Item value: ' + item)
        
        
        if(currNode.next == null){
            console.log('Item does not exist')
            return;
        }
    }
    prevNode.next = new _Node(itemToInsert, currNode)
    
  }
  insertAfter(item, itemToInsert){
    if(!this.head){
        return null;
    }
     if(this.head == null){
        this.insertFirst(itemToInsert)
        return;
    } 
  let currNode = this.head;
  //console.log(this.head)
  let prevNode = this.head;
  while(currNode.value != item){
      
      currNode = currNode.next;
      console.log('Currnode: ' + currNode.value)
      prevNode = currNode;
      console.log("Prevnode: " + prevNode.value)
      console.log('Item value: ' + item)
      
      
      if(currNode.next == null){
          console.log('Item does not exist')
          return;
      }
  }
  (prevNode.next)= new _Node(itemToInsert, currNode.next)
  
}
  find(item){
      let currNode = this.head;
      if(!this.head){
          return null;
      }
      while(currNode.value !== item){
          if(currNode.next == null){
              return null
          }
          else{
              currNode = currNode.next;
          }
      }
      return currNode;
  }
  delete(item){
      let currNode = this.head;
      let previousNode = this.head;
      if(!this.head){
          return null;
      }
      if(this.head.value === item){
          this.head = this.head.next
      }
      while(currNode.value !== item && currNode.value !== null){

          currNode = currNode.next;
          previousNode =currNode;
      }
      if(currNode == null){
          console.log('Item not found');
          return;
      }
      previousNode.next = currNode.next;
  }
}

function main(){
    let SLL = new LinkedList();
    

    SLL.insertLast('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.delete('Husker')


   SLL.insertBefore('Apollo', 'sheb')
   console.log(SLL)
return SLL

}
main()

/* 
class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
    insertBefore(valBefore, item) {
      //if empty
      if (!this.head) {
        return null;
      }
      if (this.head === null) {
        this.insertFirst(item);
      }
      //if at head
      if (this.head.value === valBefore) {
        let temp = this.head;
        //   console.log(this.head)
        this.head = new _Node(item, temp);
        return;
      }
      // else
      let currNode = this.head;
      let next;
      let previousNode;
      while (currNode.value !== valBefore) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      previousNode.next = new _Node(item, currNode);
    }
    insertAfter(valAfter, item) {
      //if empty
      if (!this.head) {
        return null;
      }
      if (this.head === null) {
        this.insertFirst(item);
        return;
      }
      //if at head
      if (this.head.value === valAfter) {
        let temp = this.head.next;
        this.head.next = new _Node(item, temp);
        return;
      }
      // else
      let currNode = this.head;
      let next = "";
      while (currNode.value !== valAfter) {
        currNode = currNode.next;
      }
      if (currNode === null) {
        this.insertLast(item);
        return;
      }
      next = currNode.next;
      currNode.next = new _Node(item, next);
    }
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let currNode = this.head;
        while (currNode.next !== null) {
          currNode = currNode.next;
        }
        currNode.next = new _Node(item, null);
      }
    }
    insertAt(pos, item) {
      if (this.head === null) {
        this.insertFirst(item);
        return;
      } else {
        let currNode = this.head;
        let index = 0;
        while (currNode.next !== null && pos !== index) {
          currNode = currNode.next;
          index++;
        }
  
        const temp = new _Node(item, currNode.next);
        currNode.next = temp;
      }
    }
    find(item) {
      let currNode = this.head;
      if (!this.head) {
        return null;
      }
  
      while (currNode.value !== item) {
        if (currNode.next === null) {
          return null;
        } else {
          currNode = currNode.next;
        }
      }
      return currNode;
    }
    remove(item) {
      let previousNode = this.head;
      let currNode = this.head;
  
      if (!this.head) {
        return null;
      }
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      while (currNode.value !== item && currNode !== null) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      }
      previousNode.next == currNode.next;
    }
  } */
/*   
  function main() {
    const SLL = new LinkedList();
    SLL.insertFirst("Apollo");
  
    
       console.log(SLL);
   
  
    return SLL;
  }
  
  main(); */