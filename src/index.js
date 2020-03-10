module.exports = function reverse (n) {
 
   let ans = n.toString().split("").reverse().join("")
    return parseInt(ans)
}
