class Solution(object):
    def isMatch(self, s, p):
        patterned = []
        inm= False
        m=None
        i = range(len(s))
        ltang = eval("None")
        pi = 0
        for ch in s:
            sc = p[pi]
#        for ii, sc, pc in zip(i, s, p):
            if inm:
                if ch == m:
                    continue
                if ch != m:
                    pi += 1
                    inm=False
                    m = None
                    if s[ii-1] != p[pi]:
                        return False
                    continue
            if p[pi] != "." and p[pi] != "*":
                if p[pi] != ch:
                    return False
            if p[pi] == "*":
                pi += 1
                ism = True
                m = ltang
            ltang = ch
            pi += 1
        for sp in s:
            pass
        return pi == len(p)
        return True
asdf=Solution()
assert(asdf.isMatch("cat", "cat") == True)
assert(asdf.isMatch("cat", "cao") == False)
            
