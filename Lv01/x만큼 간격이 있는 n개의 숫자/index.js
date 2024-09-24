function solution(x, n) {
  var answer = [];
  answer[0] = x;

  for(let i = 0; i < n; i++) {
      if(i !== 0) answer.push(answer[i - 1] + x);
  }
  
  return answer;
}