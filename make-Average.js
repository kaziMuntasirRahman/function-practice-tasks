function make_avg(ara, length){
  let sum = 0;
  for(let i of ara){
    sum = sum + i;
  }

  return sum/length;
}


console.log(make_avg([1,2,3,4,5,6,7,8,9,10], 10));