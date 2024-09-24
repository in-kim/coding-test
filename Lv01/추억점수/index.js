function solution(name, yearning, photo) {
  let answer = [];
  const scoreMap = {};

  // score map 세팅
  name.forEach((nameItem, index) => {
    scoreMap[nameItem] = yearning[index];
  });

  photo.forEach((photoItem) => {
    let photoScore = 0;
    
    photoItem.forEach(photoUser => {
      if(!!scoreMap[photoUser]) photoScore += Number(scoreMap[photoUser]);
    });

    answer.push(photoScore);
  })  
  return answer;
}

const testCase = [
  {
    name: ["may", "kein", "kain", "radi"],
    yearning:[5, 10, 1, 3] ,
    photo: [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]],
  },
  {
    name: ["kali", "mari", "don"],
    yearning:[11, 1, 55] ,
    photo: [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]],
  },
  {
    name: ["may", "kein", "kain", "radi"],
    yearning:[5, 10, 1, 3] ,
    photo: [["may"],["kein", "deny", "may"], ["kon", "coni"]],
  },
]

testCase.forEach((testItem, index) => {
  console.log(`test case ${index + 1} result : `, solution(testItem.name, testItem.yearning, testItem.photo));
});