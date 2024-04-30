# Definition for singly-linked list.
class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None

class Solution:
  def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    a_num = l1.val
    b_num = l2.val
    if l1.next:
      a_num = int(str(l1.next.next.val) + str(l1.next.val) + str(l1.val))
    if l2.next:
      b_num = int(str(l2.next.next.val) + str(l2.next.val) + str(l2.val))
    c_num = a_num + b_num
    c_str = str(c_num)
    node_c1 = ListNode(0)
    if c_num > 9:
      node_c1 = ListNode(int(c_str[2]))
      node_c2 = ListNode(int(c_str[1]))
      node_c3 = ListNode(int(c_str[0]))
      node_c2.next = node_c3
      node_c1.next = node_c2
    return node_c1

# represents 376
node_a1 = ListNode(0)
# node_a2 = ListNode(7)
# node_a3 = ListNode(3)

# node_a2.next = node_a3
# node_a1.next = node_a2

# represents 283
node_b1 = ListNode(1)
# node_b2 = ListNode(8)
# node_b3 = ListNode(2)

# node_b2.next = node_b3
# node_b1.next = node_b2

# result should be 9 -> 5 -> 6


# print(node_a1.val, node_a1.next.val, node_a1.next.next.val)
# print(node_b1.val, node_b1.next.val, node_b1.next.next.val)
answer = Solution.addTwoNumbers({}, node_a1, node_b1)
print(answer.val)
if answer.next:
  print(answer.val, answer.next.val, answer.next.next.val)

