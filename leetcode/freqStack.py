# input = [["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]]
# Output: [null,null,null,null,null,null,null,5,7,5,4]
# print(len(input[0]), len(input[1]))

# def freq_stack(input_arr):
#   commands = input_arr[0]
#   values = input_arr[1]
#   commands.pop(0)
#   values.pop(0)
#   stack = []
#   hash_map = {}
#   for command in commands:
#     if len(values):
#       value = values.pop(0)
#       if command == 'push':
#         value = value[0]
#         stack.append(value)
#         if f'{value}' in hash_map:
#           hash_map[f'{value}'] += 1
#         else:
#           hash_map[f'{value}'] = 1
#       elif command == 'pop' and len(stack):
#         temp_max_count = 0
#         temp_max_keys = []
#         for key in hash_map:
#           if hash_map[key] > temp_max_count:
#             temp_max_keys = [key]
#             temp_max_count = hash_map[key]
#           elif hash_map[key] == temp_max_count:
#             temp_max_keys.append(key)
#         # search from back of stack for any of values in temp_max_keys and pop the first one found
#         for idx, val in enumerate(reversed(stack)):
#           if f'{val}' in temp_max_keys:
#             stack.pop(len(stack) - 1 - idx)
#             hash_map[f'{val}'] -= 1
#             break
#       else:
#         return 'Error'
#     print(command, stack)
#   return stack

# print(freq_stack(input))


# class FreqStack(object):

#   def __init__(self):
#     self.stack = []
#     self.hash_map = {}

#   def push(self, x):
#     self.stack.append(x)
#     if str(x) in self.hash_map:
#       self.hash_map[str(x)] += 1
#     else:
#       self.hash_map[str(x)] = 1

#   def pop(self):
#     if len(self.stack):
#       temp_max_count = 0
#       temp_max_keys = []
#       for key in self.hash_map:
#         if self.hash_map[key] > temp_max_count:
#           temp_max_keys = [key]
#           temp_max_count = self.hash_map[key]
#         elif self.hash_map[key] == temp_max_count:
#           temp_max_keys.append(key)
#       for idx, val in enumerate(reversed(self.stack)):
#         if str(val) in temp_max_keys:
#           self.hash_map[str(val)] -= 1
#           return self.stack.pop(len(self.stack) - 1 - idx)

import collections

class FreqStack(object):

  def __init__(self):
    self.freq = collections.Counter()
    self.m = collections.defaultdict(list)
    self.maxf = 0

  def push(self, x):
    freq, m = self.freq, self.m
    freq[x] += 1
    self.maxf = max(self.maxf, freq[x])
    m[freq[x]].append(x)

  def pop(self):
    freq, m, maxf = self.freq, self.m, self.maxf
    x = m[maxf].pop()
    if not m[maxf]: self.maxf = maxf - 1
    freq[x] -= 1
    return x


obj = FreqStack()
commands = ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"]
values = [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
output = []
for idx, command in enumerate(commands):
  if command == 'push':
    output.append(obj.push(values[idx][0]))
  elif command == 'pop':
    output.append(obj.pop())
  else:
    output.append(None)
print(output)