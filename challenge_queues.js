class Person{
    constructor(name, time){
        this.name = name;
        this.time = time; 
    }
}

class Queue{
    constructor(){
        this.count = 0;
        this.people = {};
    }

    enqueue(element){
        this.people[this.count] = element;
        this.count++;
        return this.people;
    }

    dequeue(){
        this.count--;
        const element = this.people[0];
        delete this.people[0];
        return element;
    }

    peek(){
        return this.people[0];
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.count === 0;
    }

    print(){
        console.log(this.people);
    }
}

const queue = new Queue();
const person = new Person("julian", "8:23");
const person2 = new Person("pedro", "9:23");

queue.enqueue(person);
console.log(queue);
queue.enqueue(person2);
queue.print();
console.log(queue.peek()); 
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.size());
queue.print();