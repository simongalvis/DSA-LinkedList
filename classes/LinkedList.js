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
    let prevNode = this.head;
    while(currNode.value != item){
        prevNode = currNode;
        currNode = currNode.next;
    
        
        
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
  let prevNode = this.head;
  while(currNode.value != item){
      
      currNode = currNode.next;
      prevNode = currNode;

      
      
      if(currNode.next == null){
          console.log('Item does not exist')
          return;
      }
  }
  (prevNode.next)= new _Node(itemToInsert, currNode.next)
  
}
insertAt(position, itemToInsert){
    let currentPos = 0;
    
    if(!this.head){
        return null;
    }
     if(position == currentPos + 1){
        this.insertFirst(itemToInsert)
        return;
    } 
  let currNode = this.head;
  //console.log(this.head)
  let prevNode = this.head;
  while(currentPos + 1 != position){
      prevNode = currNode;
      currNode = currNode.next;

      currentPos++;

      
      if(currNode.next == null){
          console.log('Item does not exist')
          return;
      }
  }
  prevNode.next = new _Node(itemToInsert, currNode)
  
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

        previousNode =currNode;
          currNode = currNode.next;
          
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

    
   SLL.insertBefore('Boomer', 'Athena')
   SLL.insertAfter('Helo', 'Hotdog')
   SLL.insertAt(3, 'Kat')
   SLL.delete('Tauhida')
   //SLL.find('Starbuck') 
   //console.log(SLL)
   
   return SLL;
   

}
const SLL = main();

function display(list){
    let output = '';
    let currNode = list.head

    while(currNode !== null ){
        output += currNode.value + (currNode.next !== null ? ', ': '');
        currNode =currNode.next
    }
    return 'List: ' + output


}

function size(list){
    let size = 0;
    let currNode = list.head;

    while (currNode !== null){
        size++;
        currNode = currNode.next;
    } 
    return size
}
function isEmpty(list){
    if (list.head == null){
        return true;
    }
    return false;
}
function findPrevious(list, item){
    if(list.head == null || isEmpty(list) == true){
        return null
    }
    if (list.head.next == null){
        return null
    }
    let currNode = list.head;
    let prevNode = list.head;

    if(item == list.head.value){
        console.log(`There are no items before '${list.head.value}'`)
        return
    }

    while(currNode.value !== item){

        prevNode = currNode;
        currNode = currNode.next;
    }
    return prevNode;

}
function findLast(list){
    if(list.head == null || isEmpty(list) == true){
        return null
    }
    if (list.head.next == null){
        return list.head
    }
    let currNode = list.head;
    while(currNode.next !== null){
        currNode = currNode.next;
    }
    return currNode;

}
console.log(findLast(SLL))

