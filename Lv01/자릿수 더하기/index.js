function solution(n){
  const strSplit = n.toString().split('');
  return strSplit.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue),0);
}

console.log(solution(0))