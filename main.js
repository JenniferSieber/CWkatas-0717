// 6kyu
// KATA 1
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
const findUniq = arr => arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));

console.log(findUniq([1, 0, 0]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));
console.log(findUniq([ 1, 1, 1, 2, 1 ]));

// KATA 2
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
const solution = str => (str+'_').match(/.{2}/g) || [];

console.log(solution('abc'));
console.log(solution('abcdef'));
console.log(solution('abcdefg'));
console.log(solution(''));

// KATA 3
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(int){
  let even = int.filter(a => a % 2 === 0);
  let odd = int.filter(a => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([2,6,8,10,3]))

// KATA 4
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
const order = (words) => words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ');
  
console.log(order("is2 Thi1s T4est 3a"));

// KATA 5
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
const isPangram = string => {
  return 'abcdefghijklmnopqrstuvwxyz'.split('')
    .every(x => string.toLowerCase().includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram('This is not a panagram.'));
