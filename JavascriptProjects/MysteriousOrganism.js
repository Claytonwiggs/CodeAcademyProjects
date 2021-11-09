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

const pAequorFactory = (specimenNum, dna) => {
  let specimen = {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let rand = Math.floor(Math.random() * 15);
      dna[rand] = returnRandBase();
    },
    compareDNA(pAequor) {
      let count = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] != pAequor.dna[i]) {
          count += 1;
        }
      }
      return (count / 15) * 100;
    },
    willLikelySurvive() {
      let gCount = 0;
      let cCount = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === "C") {
          cCount += 1;
        } else if (this.dna[i] === "G") {
          gCount += 1;
        }
      }
      if (gCount >= 9 || cCount >= 9) {
        return true;
      } else return false;
    },
  };
  return specimen;
};

let testSpecimens = [];
for (i = 0; i < 30; i++) {
  let add = pAequorFactory(i, mockUpStrand());
  testSpecimens.push(add);
}
