def getShiftedString(s, leftShifts, rightShifts)
    shifts = leftShifts - rightShifts;
    
    shiftedString = s.dup;
    s.each_char.with_index do |chr, idx|
        shiftedString[idx] = s[(idx+shifts) % s.length]
        p shiftedString;
        p s
    end
    shiftedString

end

getShiftedString("abcd", 1, 2);
