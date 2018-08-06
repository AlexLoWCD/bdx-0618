const test = (nb) => {
  if (isNaN(nb)) {
    return 'not a number... exit'
  }
  return nb * 10;
}

console.log(test('test'))