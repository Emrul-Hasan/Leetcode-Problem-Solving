/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
    const stack = [];
    let operation = '+';

    for(let i = 0; i < s.length; i++) {
        let num = s[i];
        while(!'-+*/'.includes(s[++i]) && s[i]) {
            num += s[i];
        }
        
        if (operation === '+') {
            stack.push(+num);
        } else if (operation === '-') {
            stack.push(-num);
        } else if (operation === '*') {
            stack[stack.length - 1] *= +num;
        } else if (operation === '/') {
            const pos = stack.length - 1
            stack[pos] = 
                stack[pos] < 0 ? 
                    Math.floor(-1 * stack[pos] / +num) * -1 : 
                    Math.floor(stack[pos] / +num);
        }
        operation = s[i];
    }

    return stack.reduce((acc, n) => acc + n, 0);
};