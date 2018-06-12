require 'byebug'
def solution(a)
  my_hash = Hash.new(false)
  a.each do |num|
    my_hash[num] = true
  end
  counter = 1
  while counter < 1000000
    return counter unless my_hash[counter]
    counter = counter + 1
  end
end

p solution([1, 3, 6, 4, 1, 2])
