function summation( num ) {
  let sum = 0;
  for ( let i = num; i > 0; i-- ) {
    sum += num;
    num -= 1;
  }
  return sum;
}
summation( 4 );
console.log( 'summation( 4 ): ', summation( 4 ) );//10
