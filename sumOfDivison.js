function solution(n) {
    var answer = getSum(getYaksu(n));
    return answer;
}


function getYaksu(n){
    var arr = new Array();
    var i = 0;
    var j = 0;
    while(i <= n){
        if(n%i==0){
            arr[j] = i;
            j++;
        }
        i++;
    }
    
    return arr;
}

function getSum(arr){
    var sum  = 0 ;
    for(var num of arr){
        sum += num;
    }
    
    return sum;
}