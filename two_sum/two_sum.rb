=begin
    @param {Integer[]} nums
    @param {Integer} target
    @return {Integer[]}
    
    plan: 
    Populate a hash where the keys are numbers and the values are the indicies of their compliments
    to the target.
=end


def two_sum(nums, target)
    compliments_hash = Hash.new(false)
    nums.each_with_index do |num, index| 
        if (compliments_hash[target - num])
            return [compliments_hash[target - num], index]
        end
        compliments_hash[num] = index;
    end
    false
end

=begin
    test case: 
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
=end

nums = [2, 7, 11, 15]
target = 9

puts two_sum(nums, target) == [0, 1]