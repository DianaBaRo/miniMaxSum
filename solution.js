function miniMaxSum(arr) {
  let minValue, maxValue, minIndex, maxIndex, minResult = 0, maxResult = 0;
  
  minValue = Math.min(arr);
  maxValue = Math.max(arr);
  minIndex = arr.indexOf(minValue);
  maxIndex = arr.indexOf(maxValue);
  
  
  for (let i = 0; i < arr.length; i++) {
    if ( minIndex !== i) {
      maxResult += arr[i];
    }
    if ( maxIndex !== i ) {
      minResult += arr[i];
    }
  }
  console.log( minResult, maxResult );
}
