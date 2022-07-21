// Targil 1

// let getFirstValue = x => x[0];

// console.log(getFirstValue([1,2,3]));
// console.log(getFirstValue([80,5,100]));
// console.log(getFirstValue([-500,0,50]));

// Targil 2

// let drop = (x,n) => x.slice(n);

// console.log(drop([1,2,3],1));
// console.log(drop([1,2,3],2));
// console.log(drop([1,2,3],5));
// console.log(drop([1,2,3],0));

// Targil 3

// let concat = (...n) => {
//     const arr = [];
//     for (let i = 0; i < n.length; i++) {
//         for (let j = 0; j < n[i].length; j++) {
//             arr.push(n[i][j]);
//         }
//     }
//     return arr;
// }

// console.log(concat([1,2,3],[4,5],[6,7]));
// console.log(concat([1],[2],[3],[4],[5],[6],[7]));
// console.log(concat([1,2],[3,4]));
// console.log(concat([4,4,4,4,4]));

// Targil 4

// let arrayOfMultiples = (n,x) => {
//     let combaine = [];
//     let next = 1;
//     for (let i = 0; i < x; i++) {
//         combaine[i] = n * next;
//         next++;
//     }
//     return combaine;
// }

// console.log(arrayOfMultiples(7,5));
// console.log(arrayOfMultiples(12,10));
// console.log(arrayOfMultiples(17,6));

// Targil 5

// let sevenBoom = arr => arr.toString().includes(7) ? "Boom!" : "There is no 7 inside this array!";

// console.log(sevenBoom([1,2,3,4,5,6,7]));
// console.log(sevenBoom([8,6,33,100]));
// console.log(sevenBoom([2,55,60,97,86]));

// Targil 6

// let getLength = (n) => {
//     let a = n.flat(Infinity);
//     let b;
//     n.length == 0 ? b = 0 : b = a.length;
//     return b;
// }

// console.log(getLength([1,[2,3]]));
// console.log(getLength([1,[2,[3,4]]]));
// console.log(getLength([1,[2,[3,[4][5,6]]]]));
// console.log(getLength([1,[2],1,[2],1]));
// console.log(getLength([]));

// Targil 7

// let getValue = function(...arr){
//         arr = arr.flat(Infinity);
//         let str = arr.toString();
//         if(str == "")
//             return "What... why did you maked this?";
//         else
//             return str;
        
// }

// console.log(getValue([[[[[[[[[[[[[[["Bazinga!"]]]]]]]]]]]]]]]));
// console.log(getValue([[[[[[[[[[[[[[["God what's happening?!"]]]]]]]]]]]]]]]));
// console.log(getValue([[[[[[[[[[[[[[[]]]]]]]]]]]]]]]));
// console.log(getValue([],[],[],[],[],[[[[[[[[["I have no idea what i'm doing!"]]]]]]]]]));

// Targil 8

// let zeroToEnd = function(arr){
//     let len = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == 0){
//             arr.splice(i,1);
//             --i;
//         }
//     }
//     let numOfZeroToFill = Math.abs(len - arr.length);
//     arr = [...arr,...Array.from({length : numOfZeroToFill} ,() => 0)];
//     return arr;
// }

// console.log(zeroToEnd([1,2,0,0,4,0,5]));
// console.log(zeroToEnd([0,0,2,0,5]));
// console.log(zeroToEnd([4,4,5]));
// console.log(zeroToEnd([0,0]));

// Targil 9

// const fillArray = function (array,valueToFillArray,start,end) {
//    return array = array.fill(valueToFillArray,start,end);
// }

// const arr = [1,2,3];

// console.log(fillArray(arr, "a"));
// console.log(fillArray(Array(3), 2));
// console.log(fillArray([4,6,8,10], "*", 1, 3));