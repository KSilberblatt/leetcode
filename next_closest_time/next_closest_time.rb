require "byebug"
def next_closest_time(time_string)
  numbers = Hash.new(false)
  next_time = time_string
  time_string.each_char { |chr| numbers[chr.to_i] = true unless chr == ":" }
  changed = false

  lowest = nil
  for i in 0 .. 9 do
    if numbers[i]
      lowest = i
      break
    end
  end
  for i in time_string[4].to_i + 1 .. 9 do
    if numbers[i]
      next_time = time_string[0..3] + i.to_s
      changed = true
      break
    end
  end
  # debugger
  return next_time if changed

  for i in time_string[3].to_i + 1 .. 5 do
    if numbers[i]
      next_time = time_string[0..2] + i.to_s + lowest.to_s
      changed = true
      break
    end
  end
  return next_time if changed

  for i in time_string[1].to_i + 1 .. 2 do
    if numbers[i]
      next_time = time_string[0] + i.to_s + ":" + lowest.to_s + lowest.to_s
      changed = true
      break
    end
  end
  return next_time if changed

  for i in time_string[1].to_i + 1 .. 9 do
    if numbers[i] && time_string[0] == "0"
      next_time = time_string[0] + i.to_s + ":" + lowest.to_s + lowest.to_s
      changed = true
      break
    end
  end
  return next_time if changed

  if time_string[0] == "0"
    if numbers[1]
      next_time = "1" + lowest.to_s + ":" + lowest.to_s + lowest.to_s
      return next_time
    end
  end
  next_time 
end

p next_closest_time("11:59")
p next_closest_time("12:55")
p next_closest_time("01:59")
p next_closest_time("01:55")
p next_closest_time("01:54")
p next_closest_time("01:50")
p next_closest_time("05:55")
p next_closest_time("05:51")
