/**
 * Class Linked List Node of Data Structure
 */
class LinkedListNode {
  value: number|null = null
  next: LinkedListNode|null = null

  /**
   * Create Linked List Node
   * @param value - a number its value
   */
  constructor (value?: number) {
    if (value) {
      this.value = value
    }
  }

  /**
   * append new node to tail
   * @param value - a number its value
   */
  appendNewNodeToTail (value: number) {
    let node: LinkedListNode = this

    while (node.next !== null) {
      node = node.next
    }

    node.next = new LinkedListNode(value)
  }

  /**
   * append node to tail
   * @param node - Node to be appended
   */
  appendNodeToTail (node: LinkedListNode) {
    let n: LinkedListNode = this

    while (n.next !== null) {
      n = n.next
    }

    n.next = node
  }
}

export default LinkedListNode
