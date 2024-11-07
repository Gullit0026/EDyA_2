class City{
    constructor(name){
        this.name = name;
    }
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Graph{
    constructor(){
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node){
        this.nodes.push(node);
        this.adjList[node.name] = [];
    }

    addEdge(node1, node2){
        const node1Obj = this.searchNode(node1);
        const node2Obj = this.searchNode(node2);

        this.adjList[node2Obj.name].push(node1Obj);
        this.adjList[node1Obj.name].push(node2Obj);
    }

    printGraph(){
        console.log(this.adjList);
    }

    searchNode(value){
        const Obj = this.nodes.find(node => node.name === value);

        if(!this.nodes.length){
            return null;
        }
        return this.nodes.find(item => item === Obj);
    }

    printAdjacency(value){
        const node = this.searchNode(value);

        if (node){
            console.log(this.adjList[value]);
        }
        else{
            return;
        }
    }
}

const graph = new Graph();

graph.addNode(new City("Cali"));
graph.addNode(new City("Pasto"));
graph.addNode(new City("Ipiales"));
graph.addNode(new City("Tumaco"));
graph.addNode(new City("Santander"));
graph.addNode(new City("Tulua"));
graph.addNode(new City("Buena Ventura"));

graph.addNode(new Person("Sergio", "21"));
graph.addNode(new Person("Karolain", "18"));
graph.addNode(new Person("Santiago", "20"));
graph.addNode(new Person("Valeria", "20"));
graph.addNode(new Person("Paula", "20"));
graph.addNode(new Person("Laura", "20"));
graph.addNode(new Person("Brayan", "20"));
graph.addNode(new Person("Katherine", "20"));
graph.addNode(new Person("Valentina", "20"));

graph.addEdge("Santiago", "Pasto");
graph.addEdge("Katherine", "Ipiales");
graph.addEdge("Valeria", "Tumaco");
graph.addEdge("Laura", "Santander");
graph.addEdge("Valentina", "Tulua");
graph.addEdge("Paula", "Buena Ventura");
graph.addEdge("Brayan", "Ipiales");
graph.addEdge("Sergio", "Cali");
graph.addEdge("Karolain", "Cali");

graph.addEdge("Santiago", "Sergio");
graph.addEdge("Katherine", "Santiago");
graph.addEdge("Valeria", "Santiago");
graph.addEdge("Laura", "Valeria");
graph.addEdge("Valentina", "Brayan");
graph.addEdge("Paula", "Valeria");
graph.addEdge("Brayan", "Laura");
graph.addEdge("Sergio", "Karolain");
graph.addEdge("Karolain", "Paula");


graph.printAdjacency("Cali");