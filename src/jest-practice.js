export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function reverseString(string) {
  return string.split("").reverse().join("");
}

export function calculator(x, y) {
  const add = () => {
    return x + y;
  };

  const subtract = () => {
    return x - y;
  };

  const multiply = () => {
    return x * y;
  };

  const divide = () => {
    return x / y;
  };

  return {
    x,
    y,
    add,
    subtract,
    multiply,
    divide,
  };
}

export function caesar(str, shift) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + shift) % 26) + 97;
    } else if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    }
    newString += String.fromCharCode(charCode);
  }
  return newString;
}

export function analyzeArray(arr) {
  let length = arr.length
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let average = arr.reduce((acc, current) => acc + current, 0) / arr.length
  
  return {
    length,
    average,
    min, 
    max
  }
}