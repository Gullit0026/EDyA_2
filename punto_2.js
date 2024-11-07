class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BianaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value, null, null);

        if (!this.root) {
            this.root = newNode;
        } 
        else {
            let current = this.root;
            let isFound = false;

            while (!isFound) {
                if (current.value === value) {
                    isFound = true;
                    return null;
                }
                if (current.value > value) {
                    if (!current.left) {
                        current.left = newNode;
                        isFound = true;
                        return this;
                    } 
                    else {
                        current = current.left;
                    }
                }
                else{
                    if (!current.right) {
                        current.right = newNode;
                        isFound = true;
                        return this;
                    } 
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }
}

//----------------------------- Tree Height ----------------------------------
const treeHeight = (node) => {
    if (!node) {
      return 0;
    } else {
      return (1 + Math.max(treeHeight(node.left), treeHeight(node.right)));
    }
}

//----------------------------- Binary Tree ----------------------------------
let tree = new BianaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(11);
tree.insert(13);
tree.insert(15);
tree.insert(1);

let heigth = treeHeight(tree.root) - 1;
console.log(heigth);
