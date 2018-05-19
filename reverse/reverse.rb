# @param {Integer} x
# @return {Integer}
def reverse(x)
    return 0 if x > 2147483647 || x < -2147483648
    is_neg = x < 0
    if (is_neg)
        x *= -1
    end
    x = x.to_s.reverse.to_i
    if (is_neg)
        x *= -1
    end
    return 0 if x > 2147483647 || x < -2147483648
    x
end
