class Person{
    constructor(name, birthdate){
        this.name = name;
        this.birthdate = birthdate;
        this.children = [];
    }
}

class NaryTree{
    constructor(){
        this.root = null;
    }

    //------------------------------- Search ----------------------------------
    search(value, node = this.root){
        if (!this.root){
            return null;
        }

        if(this.root.name === value){
            return this.root;
        }
        else{
            const children = node.children;
            const inChildren = children.find(item => item.name === value);

            if (inChildren){
                return inChildren;
            }
            else{
                let hasChild;
                children.forEach(item => {
                    if (!hasChild){
                        return;
                    }

                    hasChild = this.search(value, item);
                });

                return hasChild;
            }
        }
    }

    //------------------------------- Insert ----------------------------------
    insert(name, birthdate, parent){
        const newPerson = new Person(name, birthdate);

        if(!parent){
            if(!this.root){
                this.root = newPerson;
            }
            else{
                return null;
            }
        }
        else{
            const parentNode = this.search(parent);
            parentNode.children.push(newPerson);
        }
    }

    //------------------------------- PreOrder ----------------------------------
    preOrder(node = this.root){
        if(!node){
            return;
        }

        console.log(node.name, node.birthdate, node.children);

        node.children.forEach(element => {
            this.preOrder(element);
        });
    }

    //------------------------------- PostOrder ----------------------------------
    postOrder(node = this.root){
        if(!node){
            return;
        }

        node.children.forEach(element => {
            this.postOrder(element);
        });

        console.log(node.name, node.birthdate);
    }

    //------------------------------- InOrder ----------------------------------
    inOrder(node = this.root){
        if (!node){
            return;
        }
        
        if (node.children.length === 0){
            console.log(node.name, node.birthdate);
        }
        else{
            this.inOrder(node.children[0]);
            console.log(node.name, node.birthdate);

            for(let i = 1; i < node.children.length; i++){
                this.inOrder(node.children[i]);
            }       
        }
    }

}

const naryTree = new NaryTree();

naryTree.insert("Rosa Martinez", "13/06");
naryTree.insert("Andrea Angelone", "07/04", "Rosa Martinez");
naryTree.insert("Yurani Angelone", "08/11", "Rosa Martinez");
naryTree.insert("Liam Angelone", "10/07", "Andrea Angelone");
naryTree.insert("Isabella Salamanca", "23/06", "Yurani Angelone");
naryTree.insert("Julian Salamanca", "26/09", "Yurani Angelone");

console.log("----------preOrder----------")
naryTree.preOrder();
console.log("----------postOrder----------")
naryTree.postOrder();
console.log("----------inOrder----------")
naryTree.inOrder();