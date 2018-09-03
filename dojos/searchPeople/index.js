const searchPeople = (people) => {

  let result = flatDeep(people)
  let obj = {}
  for (let value of result) {
    obj[value] = obj[value] ? obj[value] + 1 : 1
  }
  return obj

}

function flatDeep(arr1) {
  return arr1.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flatDeep(val)] : [...acc, val], []);
};


const result = {
  'John': 3,
  'David': 1,
  'Marie': 1,
  'Pascal': 2,
  'Silvie': 1
}

const l1 = ['John', 'David', 'Marie', 'Pascal', 'Pascal', 'John', 'John', 'Silvie'];
const p1 = searchPeople(l1);
console.log('Expected', result);
console.log('Current', p1);

const l2 = [['John', 'David'], ['Marie', 'Pascal'], ['Pascal', 'John'], ['John', 'Silvie']];
const p2 = searchPeople(l2);
console.log('Expected', result);
console.log('Current', p2);

const l3 = [[['John', 'David'], ['Marie', 'Pascal']], [['Pascal', 'John'], ['John', 'Silvie']]];
const p3 = searchPeople(l3);
console.log('Expected', result);
console.log('Current', p3);

const l4 = [[[['John'], ['David']], [['Marie'], ['Pascal']]], [[['Pascal'], ['John']], [['John'], ['Silvie']]]];
const p4 = searchPeople(l4);
console.log('Expected', result);
console.log('Current', p4);