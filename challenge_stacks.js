class Book{
    constructor(name, ISBN, author, editorial){
        this.name = name;
        this.ISBN = ISBN;
        this.author = author;
        this.editorial = editorial;
    }
}


class Stack {
    constructor(){
        this.count = 0;
        this.books = {};
    }

    push(element){
        this.books[this.count] = element;
        this.count++;
        return this.books;
    }

    pop(){
        this.count--;
        const element = this.books[this.count];
        delete this.books[this.count];
        return element;
    }

    peek(){
        return this.books[this.count - 1];
    }

    size(){
        return this.count;
    }

    print(){
        console.log(this.books);
    }
}

const stack = new Stack(); 
const book1 = new Book("a","a","a","a");
const book2 = new Book("b","b","b","b");

stack.push(book1);
stack.push(book2);
console.log(stack.peek());
stack.print();
stack.pop();
console.log(stack.size());
stack.print();