function solution(num) {
  if(num === 0) return "Even";
  return num % 2 === 1 || num % 2 === -1 ? "Odd" : "Even"
}