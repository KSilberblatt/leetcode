# @param {String} s
# @param {String[]} word_dict
# @return {Boolean}
require 'byebug'
=begin
    thoughts:
        - check each dictionary word
        - if that word is the beginning
=end
def word_break(s, word_dict)
  segments = [s]
  while !segments.empty?
    segmented_word = segments[0]
    word_dict.each do |word|
      my_length = word.length - 1
      if segmented_word.empty?
        return true
      elsif segmented_word[0..my_length] == word
        segments << segmented_word[word.length..segmented_word.length]
      end
      # debugger
    end
    p segments
    segments.shift

  end
  false
end

def my_sort(word_dict)
  word_dict.sort_by! do |word|
    word.length
  end
  word_dict.reverse
end
p word_break("cars", ["car", "ca", "rs"])
my_string = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaababaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
my_arr = ["a", "aaaaaaaaaa","aaaaa", "ba"]
p my_sort(my_arr)
# p word_break(my_string, my_arr)
