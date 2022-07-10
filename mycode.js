function sumZero(arr) {
  let sum = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return (sum = true);
      }
    }
  }
  return sum;
}

let arr, arr1, arr2;
arr = [1, 1];
arr1 = [1, 2, -1];
arr2 = [0, 5, 6, -5];
let arr3 = [1, 4, -5];

// console.log(sumZero(arr));
// console.log(sumZero(arr1));
// console.log(sumZero(arr2));
// console.log(sumZero(arr3));

// this function of sumZero I believe has a O(n^2). It has 2 for loops both going over the length so its O(n) * O(n) = O(n^2)

function stringHasUniqueChars(string) {
  const uniqueChars = new Set([...string]);
  const stringedUniqueChars = [...uniqueChars].join('');
  return string === stringedUniqueChars;
}

// console.log(stringHasUniqueChars('Moonday'));
// console.log(stringHasUniqueChars('Monday'));

// this function of stringHasUniqueChars i believe has an O(1) runtime.

function isPangram(string) {
  return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(
    string
  );
}

// let regex = /([a-z])(?!.*\1)/g;

// function isPangram2 (string) {
//     return regex.test(string)
// }

// console.log(isPangram('the quick brown fox jumps over the lazy dog!'));
// console.log(isPangram('the quick brown fox jumps'));

// I believe this code for isPangram has a runtime of O(1) since everything is checked at the same level.

function longestWord(arr) {
  let longest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('');
    if (word.length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

// console.log(longestWord(['hello', 'hi', 'longestttt', 'yeeeeewwwwwwwoooo']));
// console.log(longestWord(['hello', 'hi']));
// console.log(longestWord(['h', 'hi']));

// I believe the longestWord function has a runtime of O(n)
