# Complete the count function below.
def count(numbers, k)
    total = 0;
    numbers.each do |num|
        if num < k
            total = total + 1
        end
    end
    none_found = false
    counter = 2
    until none_found do
        index = 0
        none_found = true
        while (index + counter) <= numbers.length do
            product = 1
            counter.times do |i|
                product = numbers[i+index] * product
            end

            if product < k
                total = total + 1
                none_found = false
            end
            index = index + 1
        end

        counter = counter + 1
    end
    total
end

#I need to use dynamic programming to keep track of totals so I don't have to keep recalculating them unfortunately I am out of time
