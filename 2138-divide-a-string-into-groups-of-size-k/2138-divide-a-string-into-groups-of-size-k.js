/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const res = []
     let temp = ''
     let len = 0
     if(s.length % k === 0){
         len = s.length
         console.log(len);
    }
    else
    {
         len = s.length + k-(s.length%k)
         console.log(s.length);
     }
     for(let i= 0; i<len; i++){
         temp += s[i] || fill
         if(temp.length === k){
             res.push(temp)
             temp= ""
         }
     }
     return res
};
