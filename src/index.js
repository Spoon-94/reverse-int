module.exports = function reverse (n) {
   n = Math.abs(n);
   //return parseInt(n.toString().split('').reverse().join(''));
   let res = 0;
   while(n){
      res = res * 10 + n % 10;
      n = Math.floor(n / 10);
   }
   return res;
}