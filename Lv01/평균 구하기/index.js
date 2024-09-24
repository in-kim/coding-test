function solution(arr) {
  const sumArrValue = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  
  return sumArrValue / arr.length; 
}