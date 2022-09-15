// Three basic monohybrid crosses
// 1. Parental Cross - AA x aa (homozygous dominant x homozygous recessive)
//                     F1 all Aa (heterozygous dominant)
// 2. Hybrid Cross - Aa x Aa (heterozygous x heterozygous)
//                   F1 ¾A_ + ¼aa
// 3. Testcross - A_ x aa (unknown genotype x homozygous recessive)
//                F1 either all Aa || ½Aa + ½aa

let parent1 = 'Pp'; // represents a genotype
let parent2 = 'Pp';
const getMonohybridChildren = (parent1, parent2) => {
  parent1.split(''); // 'A', 'a' --> each index represents an allele
  parent2.split('');
  let childrenArr = [];
  for (let i = 0; i < parent1.length; i++) {
    for (let j = 0; j < parent2.length; j++) {
      childrenArr.push(parent1[i] + parent2[j])
      for (let k = 0; k < childrenArr.length; k++) {
        if (childrenArr[k][0] === childrenArr[k][0].toLowerCase()) {
          childrenArr[k] = childrenArr[k].split('').reverse().join('')
        }
      }
    }
  }
  return childrenArr
}
console.log(`The children of ${parent1} x ${parent2} are `, getMonohybridChildren(parent1, parent2))

// genotype input as an array
// let parent3 = ['A', 'a']; // each index represents an allele
// let parent4 = ['A', 'a'];
// const getChildren = (parent3, parent4) => {
//   let childrenArr = [];
//   childrenArr.push([parent3[0] + parent4[0]], [parent3[0] + parent4[1]], [parent3[1] + parent4[0]], [parent3[1] + parent4[1]])
//   for (let i = 0; i < childrenArr.length; i++) {
//     for (let j = 0; j < childrenArr[i].length; j++) {
//       if (childrenArr[i][j][0] === childrenArr[i][j][0].toLowerCase()) {
//         childrenArr[i][j] = childrenArr[i].toString().split('').reverse().join('')
//       }
//     }
//   }
//   return childrenArr
// }
// console.log(getMonohybridChildren(parent3, parent4))

let monohybrid = getMonohybridChildren(parent1, parent2);
const getMonohybridOccurrences = (monohybrid) => {
  let result = {};
  for (let i = 0; i < monohybrid.length; i++) {
    if (!result[monohybrid[i]]) {
      result[monohybrid[i]] = 0;
    }
    result[monohybrid[i]]++;
  }
  return result;
};
console.log(getMonohybridOccurrences(monohybrid))