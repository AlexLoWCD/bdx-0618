/*
Créer un algorithme qui permet de trouver la différence maximum ainsi que la différence minimum
entre des nombres présents dans une liste.

Ex : 
Input : [14, 8, 5, 4, 27, 18, 51, 32, 24]
Expected output : { min: 1, max: 47 }

Input : [21, 48, 94, 62, 18, 44, 254]
Expected output : { min: 3, max: 236 }
*/

const minMax = (array) => ({
  min: Math.min(...[...array].sort((a, b) => a - b).map((n, i, a) => (i > 0) ? n - (a[i - 1]) : Infinity)),
  max: Math.max(...array) - Math.min(...array),
});

console.log(minMax([14, 8, 5, 4, 27, 18, 51, 32, 24]));
console.log(minMax([21, 48, 94, 62, 18, 44, 254]));

const findMax = (array) => {
  array.sort((a, b) => b - a);
  return array[0] - array[array.length - 1]

}

const findMin = (array) => {
  array.sort((a, b) => b - a);
  let result = []
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i] - array[i + 1])
  }
  return Math.min(...result)
}

const findResult = array => {
  return {
    min: findMin(array),
    max: findMax(array),
  }
}

console.log(findResult([21, 48, 94, 62, 18, 44, 254]));