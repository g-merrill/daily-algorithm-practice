ex1 = 'abcabcbda' 
# output 3, because 'abc'
ex2 = 'loddktdji' 

def longest_substr(s):
  hash_map = {}
  substr = s[0]
  hash_map[substr] = 0
  temp_max_length = 1
  max_length = 1
  start_idx = 0
  iterator = 1
  for idx, char in enumerate(s):
    if idx == 0: continue
    if char in hash_map:
      # check if length of substr is longer than max_length
      if temp_max_length > max_length:
        max_length = temp_max_length
      
      
      # reset substr
      substr += char
      substr = substr[(hash_map[char] + iterator):]
      iterator -= 1
      # reset hashmap
      # how to remove the values in the hashmap before the repeated char ???
      # answer - you dont!, just check if hashmap index is greater? than current
      start_idx = idx + 1
      hash_map[char] = idx
      # reset temp_max_length
      temp_max_length = len(substr)
    else:
      substr += char
      temp_max_length += 1
      hash_map[char] = idx
    print(f'{idx})', char, substr)
  if temp_max_length > max_length:
    max_length = temp_max_length
  return max_length

print(longest_substr(ex1))
print(longest_substr(ex2))
# longest_substr(ex1)