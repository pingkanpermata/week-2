//program to check if the string is palindrome or not

function checkPalindrome(string) {

    //find the length of a string
    const len = string.length;

    //loop throught half of the string
    for (let i = 0; i < len / 2; i++) {

        //check if first and last string are same
        if (string[i] !== string[len - 1 -i]) {
            return 'it is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

//take input
const string = prompt('Enter a string : ');

//call the function
const value = checkPalindrome(string);

console.log(value);