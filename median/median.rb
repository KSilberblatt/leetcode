# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
require 'byebug'
def find_median_sorted_arrays(nums1, nums2)

  total_nums = nums1.length + nums2.length
  iterations = 0
  if total_nums % 2 == 0
    iterations = total_nums / 2 - 1
  else
    iterations = total_nums / 2
  end

  iterations.times do
      if nums1.empty? || nums2.empty?
        pointer = nums1 unless nums1.empty?
        pointer = nums2 unless nums2.empty?
        pointer.shift
        else
          if nums1[0] < nums2[0]
            nums1.shift
          else
            nums2.shift
          end
        end
    end
  iterations.times do
    if nums1.empty? || nums2.empty?
      pointer = nums1 unless nums1.empty?
      pointer = nums2 unless nums2.empty?
      pointer.pop
    else
      if nums1[-1] > nums2[-1]
        nums1.pop
      else
        nums2.pop
      end
    end
  end
  debugger
  pointer = nums1 unless nums1.empty?
  pointer = nums2 unless nums2.empty?
  return (nums1[0] + nums2[0]) / 2.0 unless nums1.empty? || nums2.empty?
  return (pointer[0] + pointer[1]) / 2.0 if pointer.length == 2
  pointer[0]

end

p find_median_sorted_arrays([1,3], [2])
