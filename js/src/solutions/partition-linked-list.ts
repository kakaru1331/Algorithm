import LinkedListNode from '../data-structures/LinkedListNode'

/**
 * partition Linked List base on number
 * @param node head of Linked List
 * @param base base value for segmentation
 */
function partitionLinkedList (node: LinkedListNode, base: number): LinkedListNode|null {
  let n: LinkedListNode|null = node
  let lessHead: LinkedListNode|null = null
  let lastOfLess: LinkedListNode|null = null
  let gteHead: LinkedListNode|null = null
  let lastOfGte: LinkedListNode|null = null

  while (n !== null) {
    if (n.value !== null) {
      if (n.value < base) {
        if (lastOfLess === null) {
          lessHead = new LinkedListNode(n.value)
          lastOfLess = lessHead
        } else {
          lastOfLess.next = new LinkedListNode(n.value)
          lastOfLess = lastOfLess.next
        }
      } else {
        if (lastOfGte === null) {
          gteHead = new LinkedListNode(n.value)
          lastOfGte = gteHead
        } else {
          lastOfGte.next = new LinkedListNode(n.value)
          lastOfGte = lastOfGte.next
        }
      }
    }

    n = n.next
  }

  if (lessHead !== null && lastOfLess !== null) {
    lastOfLess.next = gteHead
    return lessHead
  } else if (gteHead !== null) {
    return gteHead
  } else {
    // something is wrong
    return null
  }
}

export { partitionLinkedList }
