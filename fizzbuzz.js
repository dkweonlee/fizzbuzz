function fizzbuzz(start, end){
  listNum =[];
  for(i = start; i<=end; i++){
    if (i % 3 == 0 && i % 5 ==0){
      listNum.push('FizzBuzz')
    }else if (i % 3 == 0){
      listNum.push('Fizz')
    } else if (i % 5 == 0){
      listNum.push('Buzz')
    } else {
    listNum.push(i)
    }
  }
  console.log(listNum)
}
fizzbuzz(1, 100)