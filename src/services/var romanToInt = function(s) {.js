var romanToInt = function(s) {
    const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let totalSum = 0
    let romanValArr = s.split('');
    for(let i=0;i<romanValArr.length; i++){
        if(map[romanValArr[i]] > map[romanValArr[i-1]]){
           totalSum =  totalSum-(2*map[romanValArr[i-1]])+map[romanValArr[i]]
        } else{
            totalSum+=  map[romanValArr[i]]
        }
        console.log(totalSum)
    }
    return totalSum;
};

var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let totalSum = 0;
  s.split("").forEach((element,ind) => {
    if(map[element] < map[element+1]){
        totalSum -= map[element];
    }else{
        totalSum += map[element];
    }
  });
  
  return totalSum;
};
