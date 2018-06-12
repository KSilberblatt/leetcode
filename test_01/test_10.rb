# Complete the maxPoints function below.
def maxPoints(elements)
    elements_counter = Hash.new(0)
    elements.each do |number|
        elements_counter[number] = elements_counter[number] + 1
    end
    max = 0
    while(elements_counter.keys.length > 0) do
        # no neighbors
        elements_counter.each do |key, value|
            if elements_counter[key + 1] == 0 && elements_counter[key - 1] == 0
                max = max + value * key
                elements_counter.delete(key)
            end
            if value == 0
                elements_counter.delete(key)
            end
        end

        #each has 1 neighbor

        elements_counter.each do |key, value|
                potential_max_left = 0
                potential_max_right = 0
                if elements_counter[key - 1] == 0 && elements_counter[key + 1] > 0 && elements_counter[key + 2] == 0
                    potential_max_left = potential_max_left + value * key
                    potential_max_right = potential_max_right + elements_counter[key + 1] * (key + 1)
                    elements_counter.delete(key)
                    elements_counter.delete(key)

                    if potential_max_left > potential_max_right
                        max = max + potential_max_left
                    else
                        max = max + potential_max_right
                    end
                end
            end

        #multiple neighbors


        elements_counter.each do |key, value|
            middle_max = 0
            lost_max = 0
            if elements_counter[key - 1] == 0 && elements_counter[key + 1] > 0 && elements_counter[key + 2] > 0
                middle_max = elements_counter[key + 1] * (key + 1)
                lost_max = value * key + elements_counter[key + 2] * (key + 2)
                if middle_max > lost_max
                    max = max + middle_max
                    elements_counter.delete(key)
                    elements_counter.delete(key + 1)
                    elements_counter.delete(key + 2)
                else
                    max = value * key
                    elements_counter.delete(key)
                    elements_counter.delete(key + 1)
                end
                break
            end
        end
    end
    max
end

#not enough time to debug, I think I'm running into issues deleting keys while the iterator is going through them
