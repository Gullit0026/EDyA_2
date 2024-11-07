class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    //----------------------------- Add ----------------------------------
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }

    //----------------------------- Contains ----------------------------------
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    //----------------------------- Get Value Of Index ----------------------------------
    get(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.value;
    }
    
    //----------------------------- Sort ----------------------------------
    sort(head) {
        if (!head) {
          return "No se puede ordenar una lista vacia";
        }
      
        let current = head;
        while (current.next) {
          let next = current.next;

          while (next) {
            if (current.value > next.value) {
              let aux = current.value;
              current.value = next.value;
              next.value = aux;
            }
            next = next.next;
          }

          current = current.next;
        }
        return head;
    }
}

//----------------------------- List 1 ----------------------------------
let list1 = new LinkedList();
list1.add(57);
list1.add(45);
list1.add(39);
list1.add(33);
list1.add(29);
list1.add(27);
list1.add(23);
list1.add(19);
list1.add(12);
list1.add(5);

//----------------------------- List 2 ----------------------------------
let list2 = new LinkedList();
list2.add(51);
list2.add(43);
list2.add(37);
list2.add(31);
list2.add(26);
list2.add(22);
list2.add(15);
list2.add(12);
list2.add(5);
list2.add(1);

//------------------------------ Merge List ----------------------------------
const mergeList = (list1, list2) => {
    let newList = new LinkedList();

    for (let i = 0; i < list1.length; i++) {
        let value = list1.get(i);

        if (!newList.contains(value)){
            newList.add(value);
        }
    }

    for (let i = 0; i < list2.length; i++) {
        let value = list2.get(i);

        if (!newList.contains(value)){
            newList.add(value);
        }
    }

    return newList;
}


let list3 = mergeList(list1, list2)
list3.sort(list3.head)

console.log("Listas 1:")
console.log(list1);
console.log("Listas 2:")
console.log(list2);
console.log("Lista 1 + Lista 2:")
console.log(list3)