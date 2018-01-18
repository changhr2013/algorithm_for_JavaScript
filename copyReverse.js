// Array.prototype.copyReverse=function(n=1){
//     if(n===0) return;
//     var arr=this;
//     var a=[];
//     for (let i = arr.length-2; i >= 0; i--) {
//         a.push(arr[i]);
//     }
//     var newArr=[];
//     for (let i = 0; i < n; i++) {
//         newArr=newArr.concat(arr.concat(a));
//         newArr.pop();
//     }
//     newArr.push(newArr[0]);
//     return newArr;
// }
// var arr=[1,2,3,4,5];
// console.log(arr.copyReverse(10000));

Array.prototype.clone = function () { return this.slice(0); }
Array.prototype.copyReverse = function (num = 1) {
    var that = this.clone();
    var that1 = this.clone();
    var returnArray = this.clone();
    that.pop();
    that1.shift();
    var array1 = that.reverse();
    var array2 = that1;
    if (!isNaN(num) && num > 0) {

        for (var i = 1; i <= num; i++) {
            if (i === 1) {
                for (var n = 0; n < array1.length; n++) {
                    returnArray.push(array1[n])
                }
            } else {
                for (var y = 0; y < array2.length; y++) {
                    returnArray.push(array2[y])
                }
                for (var n = 0; n < array1.length; n++) {
                    returnArray.push(array1[n])
                }
            }
        }
    }
    return returnArray;
};
var array = [1, 2, 3, 4, 5];
console.log(array.copyReverse(4));

Array.prototype.copyReverse = function (n = 1) {

    let myfinish=[];
  
    let current=this.concat([]);
  
    let flagitem=current.slice(1,current.length-1).concat(current.reverse());
  
    for(let i=0;i<n;i++){
  
      for(let j=0;j<flagitem.length;j++){
  
            myfinish.push(flagitem[j]);
      }
    }
  
    myfinish=this.slice(0,1).concat(myfinish);
  
    return myfinish;
  
  }
  
  let arr = [1,2,3,4,5];
  
  console.log(arr.copyReverse(10000));