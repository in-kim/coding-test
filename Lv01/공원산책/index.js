
/**
 * park : 공원을 나타내는 문자열 배열
 * routes : 로봇 강아지가 수행할 명령이 담긴 문자열 배열
 * return : 모든 명령 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return
 */
function solution(park, routes) {
  var answer = [];
  let position = [0,0];

  // 현재 로봇 좌표 찾기
  for(let yIndex = 0; yIndex < park.length; yIndex++) {
    const xArr = park[yIndex].split("");
    let isFindRobot = false;
    for(let xIndex = 0; xIndex < xArr.length; xIndex++) {
      if(xArr[xIndex] === "S"){
        position = [xIndex, yIndex];
        isFindRobot = true;
        break;
      }
    }

    if(isFindRobot) break;
  }

  /**
   * 조건.1
   * 주어진 방향으로 이동할 때 공원을 벗어나는지 확인
   * 조건.2
   * 주어진 방향으로 이동할 때 장애물을 만나는지 확인
   * 
   * 위 두가지 조건 중 하나라도 해당한다면 해당 명령 무시하고 다음 명령 실행
   */
  routes.forEach(route => {
    const [direction, numberOfMoves] = route.split(" ");
    const directionMap = {
      "E": x,
      "W": -1,
      "N": -1,
      "S": +1,
    }

    console.log(direction, numberOfMoves);
  })
  return answer;
}

const isCoseOut = (position, way, moves) => {
  // 0 <= position[0] <= 2 벗어나지 않는다.
  
  if(way === "x") return position[0] < 0 || position[0] > 2  
}

const isTrap = (block) => {
  return block === "X";
}

const testCase = [
  {
    park: ["SOO","OOO","OOO"],
    routes: ["E 2","S 2","W 1"],
  },
  {
    park: ["SOO","OXX","OOO"],
    routes: ["E 2","S 2","W 1"],
  },
  {
    park: ["OSO","OOO","OXO","OOO"],
    routes: ["E 2","S 3","W 1"],
  },
]

testCase.forEach((testItem, index) => {
  console.log(`test case ${index + 1} result : `, solution(testItem.park, testItem.routes));
});