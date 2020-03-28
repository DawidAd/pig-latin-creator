/* this function will turn ordinary English words into Pig Latin words
 https://en.wikipedia.org/wiki/Pig_Latin */

function translatePigLatin(str) {
// new array will be created, it will contain every single letter of the word
  let strArray = str.split("");
// regular expressions will be used to matpch consonants or consonant clusters at the beginning of the word, because later
// they need to be pushed to the end - we ignore case and make it global
  let regex = /^(B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|X|Z|W|Y)+/gi;

/* we check if first letter of the word matches out regex (if it's a consonant/consonant cluster) - if not, we just add "way"
 to the end of it and have a Pig Latin word ready, if it does - we run a loop that will push every consonant to the end of the word
 and add "ay" to it. If the word is purely made of consonants, like "rhythm", we have a condition that will just finish the loop
 and push "ay" anyway to the end.*/
  if (!strArray[0].match(regex)) {
    strArray.push("way");
  } else {
  for(let i = 0; i < strArray.length; i++) {
  if (strArray[0].match(regex)) {
    strArray.push(strArray[0]);
    strArray.shift(strArray[0]);
    if (i === strArray.length - 1) {
      strArray.push("ay");
      break;
    }
  } else {
    strArray.push("ay");
    break;
  };
  }
  }

// now we just join all the elements of the array into string and return it
  strArray = strArray.join('');
  return strArray;
}
