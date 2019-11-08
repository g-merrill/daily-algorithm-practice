def dont_give_me_five(start,end):
  count = 0
  for x in range(start, end + 1):
    if "5" not in str(x):
      count += 1
  return count

# cycle through numbers from start to ending num
# check that 5 is not in stingified number, then add to count
# return total amount of nums that don't have 5