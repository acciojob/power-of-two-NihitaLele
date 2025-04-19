const isPowerOfTwo = (number) => {
  // A power of two is greater than 0 and has only one bit set in binary
  return number > 0 && (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"))
alert(isPowerOfTwo(num));
