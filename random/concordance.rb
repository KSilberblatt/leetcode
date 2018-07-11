# This was designed to work with stdin and large files. For example, the
# Bible can be parsed in < 5 seconds. The default output is "pretty_output"
# to match the example output.

#cat file_path.txt | ruby concordance.rb


class Concordance
  def initialize
    @concordance_hash = hash_set_up
    @sentence_counter = 0
    @titles_hash = titles_hash_init
    input_handler
  end

  # Sets the default value in the hash to [0]. Index 0 is the counter
  # of occurrences and index 1 onwards are the sentence citations
  def hash_set_up
    Hash.new { |hash, key| hash[key] = Array.new(1) { 0 } }
  end

  # Processes input line by line -- if input might contain huge paragrphs
  # with no line breaks, I would modify this code to process a fixed size
  # input buffer at a time.
  def input_handler
    STDIN.read.split("\n").each do |line|
      process_line(line)
    end
  end

  # Processes each line into individual words for easier parsing logic
  def process_line(line)
    line_arr = line.split(" ")
    line_arr.each do |word|
      if word.delete("-/:;,()\"").empty?
        next
      end
      process_word(word.delete("/:;,()<>{}|[]\""))
    end
  end

=begin
  ToDo: There are still some cases that this logic doesn't work for,
  reference https://en.wikipedia.org/wiki/Sentence_boundary_disambiguation
  A common 'edge case' this will have trouble with are names such as
  George R. R. Martin. I suspect my code works for ~ 90% of cases.
=end
  def end_of_sentence?(word)
    count_punct = word[-1].count(".?!")
    count_punct >= 1 && !word[0...-1].include?('.') && !@titles_hash[word]
  end

  # Processes a word into the @concordance_hash checking if it is the end
  # of a sentence or not.
  def process_word(word)
    word = word.downcase
    if end_of_sentence?(word)
      @concordance_hash[word[0...-1]][0] += 1
      @concordance_hash[word[0...-1]].push(@sentence_counter)
      @sentence_counter += 1
    else
      @concordance_hash[word][0] = @concordance_hash[word][0] + 1
      @concordance_hash[word].push(@sentence_counter)
    end
  end

  # Single column output. Formatting prefers words no longer than 25 characters
  def output
    alphabetical_keys = @concordance_hash.keys.sort
    alphabetical_keys.each do |key|
      value = "{" + @concordance_hash[key][0].to_s + ":" +
      @concordance_hash[key][1..-1].to_s.delete("[] ") + "}"

      printf "%-25s %s \n", key, value
    end
  end

  # Two column output to match example. Formatting prefers words no longer
  # than 15 characters and ~10 of less occurances.
  def pretty_output #two columns
    alphabetical_keys = @concordance_hash.keys.sort
    half = (alphabetical_keys.length - 1) / 2
    alphabetical_keys[0..half].each_with_index do |key, idx|
      value = "{" + @concordance_hash[key][0].to_s + ":" +
      @concordance_hash[key][1..-1].to_s.delete("[] ") + "}"

      key2 = alphabetical_keys[1 + idx + half]
      value2 = "{" + @concordance_hash[key2][0].to_s + ":" +
      @concordance_hash[key2][1..-1].to_s.delete("[] ") + "} \n"
      if 1 + idx + half >= alphabetical_keys.length
        value2 = "\n"
      end

      printf "%-15s %-20s %-15s %s", key, value, key2, value2
    end
  end

  # Common cases missed in orignal `end_of_sentence?` logic. More cases could
  # be added to make the logic more sound, but the idea is there.
  def titles_hash_init
    myHash = Hash.new {|hash, key| hash[key] = false}
    ["mr.", "mrs.", "ms.", "dr.", "sr.", "jr.", "mr.", "esq.", "hon.",
      "messrs.", "mmes.", "msgr.", "prof.", "rev.", "st."].each do |ttl|
      myHash[ttl] = true;
    end
    myHash
  end

end

example = Concordance.new
# example.pretty_output
example.output
