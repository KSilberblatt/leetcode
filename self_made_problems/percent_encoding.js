const ENCODING_SCHEME = {
  '21': '!',
  '23': '#',
  '24': '$',
  '26': '&',
  '27': '\'',
  '28': '(',
  '29': ')',
  '2A': '*',
  '2B': '+',
  '2C': ',',
  '2F': '/',
  '3A': ':',
  '3B': ';',
  '3D': '=',
  '3F': '?',
  '40': '@',
  '5B': '[',
  '5D': ']',

};
const hello = (link, ref) => {
  let newLink = "";
  for (let i = 0; i < link.length; i++){
    if (link.charAt(i) === "%"){
      let char = ref[link.slice(i+1,i+3)];
      newLink += char;
      i += 2;
    }
    else
      newLink += link.charAt(i);
  }
  return newLink;
};

console.log(hello("www.hello.com/%23did/it%5Dwork%3F", ENCODING_SCHEME));
