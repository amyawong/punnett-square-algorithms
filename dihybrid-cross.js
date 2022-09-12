let parent1 = 'AaBb'; // genotype
let parent2 = 'AaBb';

const getDihybridChildren = (parent1, parent2) => {
  parent1.split(''); // 'A', 'a', 'B', 'b' --> each index represents an allele
  parent2.split('');
  let firstGenotype, secondGenotype, genotype1Arr = [], genotype2Arr = [], childrenArr = [];
  genotype1Arr.push(parent1[0] + parent1[2], parent1[0] + parent1[3], parent1[1] + parent1[2], parent1[1] + parent1[3])
  genotype2Arr.push(parent2[0] + parent2[2], parent2[0] + parent2[3], parent2[1] + parent2[2], parent2[1] + parent2[3])
  for (let i = 0; i < genotype1Arr.length; i++) {
    for (let j = 0; j < genotype2Arr.length; j++) {
      let dihybridGenotypes = genotype1Arr[i][0] + genotype2Arr[j][0] + genotype1Arr[i][1] + genotype2Arr[j][1]
      childrenArr.push(dihybridGenotypes)
      for (let k = 0; k < childrenArr.length; k++) {
        if (childrenArr[k][0] === childrenArr[k][0].toLowerCase()) {
          firstGenotype = childrenArr[k].slice(0, 2).split('').reverse().join('');
          secondGenotype = childrenArr[k].slice(2, 4).split('').join('');
          childrenArr[k] = firstGenotype + secondGenotype
        }
        if (childrenArr[k][2] === childrenArr[k][2].toLowerCase()) {
          firstGenotype = childrenArr[k].slice(0, 2).split('').join('');
          secondGenotype = childrenArr[k].slice(2, 4).split('').reverse().join('');
          childrenArr[k] = firstGenotype + secondGenotype
        }
        if (childrenArr[k][0] === childrenArr[k][0].toLowerCase() && childrenArr[k][2] === childrenArr[k][2].toLowerCase()) {
          firstGenotype = childrenArr[k].slice(0, 2).split('').reverse().join('');
          secondGenotype = childrenArr[k].slice(2, 4).split('').reverse().join('');
          childrenArr[k] = firstGenotype + secondGenotype
        }
      }
    }
  }
  return childrenArr;
}
console.log(`The children of ${parent1} x ${parent2} are `, getDihybridChildren(parent1, parent2))

let dihybrid = getDihybridChildren(parent1, parent2)
const getDihybridOccurrences = (dihybrid) => {
  let result = {};
  for (let i = 0; i < dihybrid.length; i++) {
    if (!result[dihybrid[i]]) {
      result[dihybrid[i]] = 0;
    }
    result[dihybrid[i]]++;
  }
  return result;
};
console.log(getDihybridOccurrences(dihybrid)); // numbers are numerator and denominator is always 16

// extremely hard coded but it works