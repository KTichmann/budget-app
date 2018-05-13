let flattenByAdding = function(arr, x, y){
  let result = [];
  const xyArr = arr.map((obj) => {
    let resultObj = new Object();
    resultObj[x] = obj[x]
    resultObj[y] = obj[y]
    return resultObj
  })
  xyArr.map((obj) => {
    let isInResult = false;
    for(let i = 0; i < result.length; i++){
      if(result[i][x] === obj[x]){
        result[i][y] = Number(result[i][y]) + Number(obj[y]);
        isInResult = true;
      }
    }
    if(!isInResult){
      obj[y] = Number(obj[y])
      result.push(obj)
    }
  })
  return result
}

export default flattenByAdding;
