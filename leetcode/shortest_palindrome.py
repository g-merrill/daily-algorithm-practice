# Greg Redig's solution, refactored a little bit
def shortestPalindrome(s: str) -> str:
  new_s = s
  i = 1
  while new_s != new_s[::-1]:
    new_s = (s[-i::])[::-1] + s
    i += 1
  return new_s

print(shortestPalindrome('aacecaaa')) # => 'aaacecaaa'
print(shortestPalindrome('abcd')) # => 'dcbabcd'
print(shortestPalindrome('a')) # => 'a'
print(shortestPalindrome('aba')) # => 'aba'
print(shortestPalindrome('annabanana')) # => 'ananabannabanana'