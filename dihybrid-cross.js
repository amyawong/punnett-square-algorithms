// AaBb x AaBb yields:
let dihybrid = [
  'AABB', 'AABb', 'AaBB', 'AaBb',
  'AABb', 'AAbb', 'AaBb', 'Aabb',
  'AaBB', 'AaBb', 'aaBB', 'aaBb',
  'AaBb', 'Aabb', 'aaBb', 'aabb'
]

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