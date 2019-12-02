ex1 = 'abcabcbda' 
# output 3, because 'abc'
ex2 = 'loddktdji' 

def longest_substr(s):
  hash_map = {}
  substr = ''
  temp_max_length = 0
  max_length = 0
  start_idx = 0
  for idx, char in enumerate(s):
    if char in hash_map and hash_map[char] >= start_idx:
      # check if length of substr is longer than max_length
      if temp_max_length > max_length:
        max_length = temp_max_length
      # reset substr
      substr += char
      start_idx = hash_map[char] + 1
      substr = s[start_idx:(idx + 1)]
      hash_map[char] = idx
      # reset temp_max_length
      temp_max_length = len(substr)
    else:
      substr += char
      temp_max_length += 1
      hash_map[char] = idx
    print(f'{idx})', char, substr, max_length)
  if temp_max_length > max_length:
    max_length = temp_max_length
  return max_length

print(longest_substr(ex1))
print(longest_substr(ex2))
# longest_substr(ex1)