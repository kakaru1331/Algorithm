function BinaryTree(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

function setLeftValue(tree, value) { 
    tree.leftChild = new BinaryTree(value);
}

function setrightValue(tree, value) { 
  tree.rightChild = new BinaryTree(value);
}

var node1 = new BinaryTree(1);
setLeftValue(node1, 2);
setrightValue(node1, 5);
var node2 = node1.leftChild;
var node5 = node1.rightChild;

setLeftValue(node2, 3);
setrightValue(node2, 4);
var node3 = node2.leftChild;
var node4 = node2.rightChild;

setLeftValue(node5, 6);
setrightValue(node5, 7);
var node6 = node5.leftChild;
var node7 = node5.rightChild;

function preOrder(tree) {
  console.log(tree.value);

  if (tree.leftChild)
    preOrder(tree.leftChild);

  if (tree.rightChild)
    preOrder(tree.rightChild);
}

function inOrder(tree) {
  if (tree.leftChild)
    preOrder(tree.leftChild);

  console.log(tree.value);

  if (tree.rightChild)
    preOrder(tree.rightChild);
}

function postOrder(tree) {
  if (tree.leftChild)
    preOrder(tree.leftChild);  
  
  if (tree.rightChild)
    preOrder(tree.rightChild);

  console.log(tree.value);
}

function breadthFirstSearch (tree) {
  var queue = [];
  var currentNode;

  queue.push(tree);
  
  while(queue.length != 0) {
    currentNode = queue.shift();    
    console.log(currentNode.value);

    if (currentNode.leftChild)
      queue.push(currentNode.leftChild);
  
    if (currentNode.rightChild)
      queue.push(currentNode.rightChild);
  }
}

preOrder(node1);
inOrder(node1);
postOrder(node1);
breadthFirstSearch(node1);