// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

function checkPalindrome(inputString) {
  const arr = inputString.split("");

  const reversed = arr.reverse().join("");

  if (reversed === inputString) {
    return true;
  } else {
    return false;
  }

  console.log(reversed);
  console.log(inputString);
}
