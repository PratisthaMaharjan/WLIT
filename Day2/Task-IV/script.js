const str = "strawberry";
console.log("Input: ",str);
console.log("Total vowel =", str.split('').reduce((count, chr) => {
    return count + "aeiou".includes(chr);
},0));