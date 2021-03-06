import { partitionLinkedList } from '@solutions/partition-linked-list'
import LinkedListNode from '@data-structures/LinkedListNode'

describe('partitionLinkedList', () => {
  /**
   * compare linked list
   * @param head1 - head of linked list
   * @param head2 - head of linked list
   */
  function compareLinkedList (head1: LinkedListNode, head2: LinkedListNode): boolean {
    if (head1 === null && head2 === null) {
      return true
    }

    if (head1.next !== null && head2.next !== null) {
      const isEqual = compareLinkedList(head1.next, head2.next)
      if (!isEqual) {
        return false
      }
    }

    if (head1.value !== head2.value) {
      return false
    }

    return true
  }

  // eslint-disable-next-line no-unused-vars
  function printLinkedList (head: LinkedListNode) {
    let node: LinkedListNode|null = head

    while (node !== null) {
      console.log('value: ', node.value)
      node = node.next
    }
  }

  test('When all elements are less than the base', () => {
    // linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const head = new LinkedListNode(1)
    head.appendNewNodeToTail(2)
    head.appendNewNodeToTail(3)
    head.appendNewNodeToTail(4)
    head.appendNewNodeToTail(5)
    head.appendNewNodeToTail(6)

    const base = 7

    // actual linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const partitioned = partitionLinkedList(head, base)

    // error occurs while partition linked list
    if (partitioned === null) return

    // expected linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const expected = new LinkedListNode(1)
    expected.appendNewNodeToTail(2)
    expected.appendNewNodeToTail(3)
    expected.appendNewNodeToTail(4)
    expected.appendNewNodeToTail(5)
    expected.appendNewNodeToTail(6)

    expect(compareLinkedList(partitioned, expected)).toBeTruthy()
  })

  test('When all elements are greater than equal the base', () => {
    // linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const head = new LinkedListNode(1)
    head.appendNewNodeToTail(2)
    head.appendNewNodeToTail(3)
    head.appendNewNodeToTail(4)
    head.appendNewNodeToTail(5)
    head.appendNewNodeToTail(6)
    const base = 0

    // actual linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const partitioned = partitionLinkedList(head, base)

    // error occurs while partition linked list
    if (partitioned === null) return

    // expected linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const expected = new LinkedListNode(1)
    expected.appendNewNodeToTail(2)
    expected.appendNewNodeToTail(3)
    expected.appendNewNodeToTail(4)
    expected.appendNewNodeToTail(5)
    expected.appendNewNodeToTail(6)

    expect(compareLinkedList(partitioned, expected)).toBeTruthy()
  })

  test('partition nodes of linked list by base number', () => {
    // linked list 6 -> 5 -> 4 -> 3 -> 2 -> 1
    const head = new LinkedListNode(6)
    head.appendNewNodeToTail(5)
    head.appendNewNodeToTail(4)
    head.appendNewNodeToTail(3)
    head.appendNewNodeToTail(2)
    head.appendNewNodeToTail(1)
    const base = 3

    // actual linked list 6 -> 5 -> 4 -> 3 -> 2 -> 1
    const partitioned = partitionLinkedList(head, base)

    // error occurs while partition linked list
    if (partitioned === null) return

    // printLinkedList(partitioned)

    // expected linked list 2 -> 1 -> 6 -> 5 -> 4 -> 3
    const expected = new LinkedListNode(2)
    expected.appendNewNodeToTail(1)
    expected.appendNewNodeToTail(6)
    expected.appendNewNodeToTail(5)
    expected.appendNewNodeToTail(4)
    expected.appendNewNodeToTail(3)

    expect(compareLinkedList(partitioned, expected)).toBeTruthy()
  })
})
