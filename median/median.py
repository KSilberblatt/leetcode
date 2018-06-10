def getl(a, n):
    try:
        return a[n]
    except:
        return None

def median(a, b):
  print (a, b)
  if len(a) <= 1 and len(b) <= 1:
      return max(getl(a, 0), getl(b, 0))
  if a[len(a)/2] > b[len(b)/2]:
      return median(a[:len(a)/2], b[len(b)/2:])
  return median(a[len(a)/2:], b[:len(b)/2])

print median([1,3,12,22,37], [2,3,6,10,50,80])
print median([1,11,12,22,37], [2,3,6,10,50,80])
print median([1, 3], [2])
print median([1, 2, 2.5], [3, 4])
print median([1, 2, 2.5, 5, 6, 7], [3, 4])
