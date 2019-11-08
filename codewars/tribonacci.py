def tribonacci(arr, n):
  trib = arr[0 : len(arr)]
  if n == 0:
    return []
  if n <= 3:
    return arr[0 : n]
  while n > len(trib) :
    temp = trib[len(trib) - 3 : len(trib)]
    trib.append(temp[0]+temp[1]+temp[2])
  return trib
