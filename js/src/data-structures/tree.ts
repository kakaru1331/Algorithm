class BinaryTree {
  leftChild: null|BinaryTree = null
  rightChild: null|BinaryTree = null
  value

  constructor (value: number) {
    this.value = value
  }

  setLeftValue (value: number) {
    this.leftChild = new BinaryTree(value)
  }

  setRightValue (value: number) {
    this.rightChild = new BinaryTree(value)
  }
}

const node1 = new BinaryTree(1)
node1.setLeftValue(2)
node1.setRightValue(5)
const node2 = node1.leftChild
const node5 = node1.rightChild

node2?.setLeftValue(3)
node2?.setRightValue(4)

node5?.setLeftValue(6)
node5?.setRightValue(7)

function preOrder (tree: BinaryTree) {
  console.log(tree.value)

  if (tree.leftChild) { preOrder(tree.leftChild) }

  if (tree.rightChild) { preOrder(tree.rightChild) }
}

function inOrder (tree: BinaryTree) {
  if (tree.leftChild) { preOrder(tree.leftChild) }

  console.log(tree.value)

  if (tree.rightChild) { preOrder(tree.rightChild) }
}

function postOrder (tree: BinaryTree) {
  if (tree.leftChild) { preOrder(tree.leftChild) }

  if (tree.rightChild) { preOrder(tree.rightChild) }

  console.log(tree.value)
}

function breadthFirstSearch (tree: BinaryTree) {
  const queue = []
  let currentNode

  queue.push(tree)

  while (queue.length !== 0) {
    currentNode = queue.shift()
    console.log(currentNode?.value)

    if (currentNode?.leftChild) { queue.push(currentNode.leftChild) }

    if (currentNode?.rightChild) { queue.push(currentNode.rightChild) }
  }
}

preOrder(node1)
inOrder(node1)
postOrder(node1)
breadthFirstSearch(node1)
