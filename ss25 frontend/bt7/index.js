let str = "hello WORLD";
let result = str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
console.log(result); 
console.log(capitalizeWords("hello WORLD")); 
console.log(capitalizeWords("kImchI ")); 