// function addSeperator(number, splitNum) {
//     var num = number;
//     var numArr = num.toString().split('');
//     var newnumArr = [];
//     if (num > 0) {
//         for (let i = 1; i <= numArr.length; i++) {
//             newnumArr.push(numArr.slice(numArr.length - i, numArr.length - i + 1));
//             if (i % splitNum === 0 && i !== numArr.length) {
//                 newnumArr.push(',');
//             }
//         }
//     }

//     if (num < 0) {
//         for (let i = 1; i <= numArr.length; i++) {
//             newnumArr.push(numArr.slice(numArr.length - i, numArr.length - i + 1));
//             if (i % splitNum === 0 && i !== numArr.length && i !== numArr.length - 1) {
//                 newnumArr.push(',');
//             }
//         }
//     }

//     return newnumArr.reverse().join('');
// }

// for(let i=-123456;i<999999;i++){
//     addSeperator(i,3);
// }



// function addSeperator(number, splitNum) {
//     var num = number;
//     var numArr = num.toString().split('');
//     var newnumStr = '';

//     if (num > 0) {
//         for (let i = 1; i <= numArr.length; i++) {

//             newnumStr = numArr.slice(numArr.length - i, numArr.length - i + 1) + newnumStr;
//             if (i % splitNum === 0 && i !== numArr.length) {
//                 newnumStr = ',' + newnumStr;
//             }
//         }
//     }

//     if (num < 0) {
//         for (let i = 1; i <= numArr.length; i++) {
//             newnumStr = numArr.slice(numArr.length - i, numArr.length - i + 1) + newnumStr;
//             if (i % splitNum === 0 && i !== numArr.length && i !== numArr.length - 1) {
//                 newnumStr = ',' + newnumStr;
//             }
//         }
//     }

//     return newnumStr
// }

// var arraylist=[]
// for(let i=-123456;i<+123456;i++){
//     arraylist.push(addSeperator(i,3));
// }
// console.log(arraylist);

var number=-1234567.12345;
var numberStr=new Intl.NumberFormat().format(number);
console.log(numberStr);