function solution(players, callings) {
  let rank = [...players];
  const playerMap = {};

  players.forEach((palyer, index) => {
    playerMap[palyer] = index;
  })

  callings.forEach(callPlayer => {
    const callPlayerIndex = playerMap[callPlayer];
    const overtakenPlayer = rank[callPlayerIndex-1]; 

    // 순서 바꾸기
    rank[callPlayerIndex -1] = callPlayer;
    rank[callPlayerIndex] = overtakenPlayer;
    
    // 바뀐 순서 맵에 반영하기
    playerMap[callPlayer] = callPlayerIndex - 1;
    playerMap[overtakenPlayer] = callPlayerIndex;
  });


  return rank;
}

const testCase = [
  {
    players: ["mumu", "soe", "poe", "kai", "mine"],
    callings: ["kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine","kai", "kai", "mine", "mine"],
  },
]

testCase.forEach((testItem, index) => {
  console.log(`test case ${index + 1} result : `, solution(testItem.players, testItem.callings));
});