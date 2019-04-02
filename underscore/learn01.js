var _ = require("underscore");


var AarrayTest01 = [0,3,3,4,5,11,22];
var objTest01 = {
        a: 1,
        b: 5,
        c: 3,
        d: 9
};

// 数组
// _.each(AarrayTest01,function(value, key, list){
//     console.log(value);
//     console.log(key);
//     console.log(list);
// });
// 对象
// console.log("\n======================\n");
// _.each(objTest01,function(value,key,list){
//     console.log(value);
//     console.log(key);
//     console.log(list);
// });

// map
// AarrayTest01 = _.map(AarrayTest01,function(num){
//     console.log(num + 3);
//     return num + 3;
// });
// console.log(AarrayTest01);

// reduce
// var test01 = _.reduce(AarrayTest01,function(memo,num){
//     console.log(memo);
//     return memo + num;
// },20);
// console.log(test01);

// reduceRight
var test02 = _.reduceRight(AarrayTest01,function(memo,num){
    return memo - num;
});
console.log(test02);
