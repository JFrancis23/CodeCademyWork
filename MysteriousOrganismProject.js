// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function for DNA samples
const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate: function () {
      let rndIndex = [Math.floor(Math.random() * this.dna.length)];
      let mutationBase = returnRandBase();
      while (mutationBase === this.dna[rndIndex]) {
        mutationBase = returnRandBase();
      }
      this.dna.splice(rndIndex, 1, mutationBase);
    },
    compareDNA: function (pAequor) {
      // Loops through array and compares percentage of same bases in matching index.
      let percentCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          percentCount++;
        }
      }
      let percentage = ((percentCount / this.dna.length) * 100).toFixed(2);
      console.log(`The pAequor specimin has ${percentage}% of shared DNA.`);
    },

    willLikelySurvive: function () {
      // Loops through array, returns true if >60% of G||C present in dna. false otherwise
      let percentCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "G" || this.dna[i] === "C") {
          percentCount++;
          }
      }
      let percentageChance = ((percentCount / this.dna.length) * 100).toFixed(2);
      if (percentageChance >= 60) {
        return true;
      } else {
        return false;
      }
    },

  };
};
// Building of test array of 30 samples that are likely to survive.
let viableArray = [];
let viableCount = 1;
for (let i = 1; viableArray.length < 30; i++) {
  let pAequor = pAequorFactory(viableCount, mockUpStrand());
  if (pAequor.willLikelySurvive) {
    viableArray.push(pAequor);
    viableCount++;
  }
}
// Logging of viable array 
console.log(viableArray);
