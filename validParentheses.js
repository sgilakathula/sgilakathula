/* Problem: Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid. An input string is valid if:

 1. Open brackets are closed by the same type of brackets.
 2. Open brackets are closed in the correct order.

*/

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            const last = stack.pop();
            if (map[last] !== s[i]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false

