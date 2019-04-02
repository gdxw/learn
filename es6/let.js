var arr = [];
for(var i = 0; i < 6; i++){
    console.log(i);
    arr[i] = function(){
        console.log(i);
    }
}
console.log(arr[1]());

// let的作用域
var arrB = [];
for(let i = 0; i < 6; i++){
    console.log(i);
    arrB[i] = function(){
        console.log(i);
    }
}
console.log(arrB[1]());


for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}

// 不存在变量提升

console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;