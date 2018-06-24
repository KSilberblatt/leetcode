def reverse_vowels(word)
	left_pointer = 0
	right_pointer = word.length() - 1
	while (left_pointer < right_pointer)
		while(!(word[left_pointer].count("aeiou") > 0) && left_pointer < right_pointer)
			left_pointer += 1
		end
		while(!(word[right_pointer].count("aeiou") > 0) && left_pointer < right_pointer)
			right_pointer -= 1
		end
		word[left_pointer], word[right_pointer] = word[right_pointer], word[left_pointer]
    left_pointer += 1
    right_pointer -= 1
	end
	word
end

p reverse_vowels("united state");
