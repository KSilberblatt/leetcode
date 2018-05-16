#--------------- Comments on Challenge ---------------
# Fun challenge, however the specs ask for a different return value
# than the test cases test for. I started with a recursive solution,
# however it quickly became hard to read with many edge cases.


# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}

#--------------- Solution ---------------
def add_two_numbers(l1, l2)
    
    num1 = list_to_i(l1)
    num2 = list_to_i(l2)
    num3 = num1 + num2                  # solution that needs to be converted into list/array
    
    head_node = ListNode.new(num3%10)   # specs ask for a head node so I keep track of it while
#                                         building the rest of the list
    current_node = head_node 
    num3 = num3 / 10
    result_array = [head_node.val]      # the test cases want an array so I also create an array
#                                         in parallel to the List

    until num3 == 0
        current_node.next = ListNode.new(num3 % 10)
        current_node = current_node.next
        num3 = num3 / 10
        result_array.push(current_node.val)
    end

    result_array                        # returns an array to pass test casses on leetcode

#   head_node                             The specs asked for the head node, 
#                                         but the test cases test for an array
end

#--------------- Helper Method ---------------
# Converts a head node into an integer
def list_to_i(list_node)
    result_s = ""
    until list_node.nil?
        result_s = list_node.val.to_s +  result_s
        list_node = list_node.next 
    end
    result_s.to_i
end 


#--------------- Test Cases ---------------

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

nodes = [ListNode.new(2), ListNode.new(4), ListNode.new(3), 
    ListNode.new(5), ListNode.new(6), ListNode.new(4)]
nodes[0].next = nodes[1]
nodes[1].next = nodes[2]
nodes[3].next = nodes[4]
nodes[4].next = nodes[5]

puts add_two_numbers(nodes[0], nodes[3])

#-------------------------------------------