##DP: SUCCESS: breaking up is hard to do
#8 -1 -1 -1 -1 -1 -1 -1 10 -1 12 -1 16 -1 -1 -1 18 -1 20 -1

#breakingupishardtodo
# w = word,  d = dictionary, range(i) -> 0...i, w[-i:] -> w[-i:len(w)]
d = set(['I',
 'a',
 'am',
 'ace',
 'mace',
 'ma',
 'mama',
 'for',
 'ever',
 'forever',
 'car',
 'rot',
 'carrot',
 'breaking',
 'break',
 'up',
 'is',
 'hard',
 'to',
 'do'])

def word_break(w, d):
    a = [-1] * len(w)
    for i in range(len(w) + 1):
        segment_to_consider = w[-i:]
        print segment_to_consider
        for j in range(i):
            if j == 0 and w[-i:] in d:
                a[-i] = len(w)
                print "FULL WORD MATCH"
                break
            if w[-i:-i+j] in d and a[-i+j] > -1:
                a[-i] = len(w)-i+j
                print "FOUND MATCH"
                break
    if a[0] == -1:
        print "NO VALID SEGMENTATION"
        return
    index = 0
    while index != len(w):
        print w[index:a[index]]
        index = a[index]



word_break("breakingupishardtodo", d)
    
