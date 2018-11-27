import re
ENCODING_SCHEME = {
  '%21': '!',
  '%23': '#',
  '%24': '$',
  '%26': '&',
  '%27': '\'',
  '%28': '(',
  '%29': ')',
  '%2A': '*',
  '%2B': '+',
  '%2C': ',',
  '%2F': '/',
  '%3A': ':',
  '%3B': ';',
  '%3D': '=',
  '%3F': '?',
  '%40': '@',
  '%5B': '[',
  '%5D': ']'}
def hello(link, ref):
  newLink = link
  for ele in ref:
    newLink = re.sub(ele, ref[ele], newLink)
  print(newLink)

hello("www.hello.com/%23did/it%5Dwork%3F", ENCODING_SCHEME)
