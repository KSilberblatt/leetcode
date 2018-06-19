
def fib(place)
  memo = Hash.new(-1)
  memo[1] =
  if memo[place] != -1
    return memo[place]
  end
  fib_helper(memo, place)

end
def fib_helper(hash, place)
  return 0 if place == 1
  return 1
end
