function count_zero(str){
  let counter = 0;
  const length = str.length;
  for(let i = 0 ; i<length ; i++){
    if(str[i]==='0'){
      counter++;
    }
  }

  return counter;
}



console.log(count_zero('101001010101000'));