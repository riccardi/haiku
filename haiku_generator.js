var haiku = require('./haiku.js');
var structureOne = [[5],[7],[5]];
var structureTwo = [
  [2,3],
  [1,3,3],
  [3,2]
];
var structureThree = [
  [2,1,2],
  [3,2,1,1],
  [2,1,2]
];
console.log(haiku.createHaiku(structureOne));
console.log(haiku.createHaiku(structureTwo));
console.log(haiku.createHaiku(structureThree));