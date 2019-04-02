function A(){
    this.a = "aaa";
    this.b = "bbb";
}

function B(){
    A.call(this);
    this.c = "ccc";
    this.d = "ddd";
}

var a1 = new A();
var b1 = new B();


console.log(b1.hasOwnProperty("a")) //true
console.log(b1.hasOwnProperty("b")) //true
console.log(b1.hasOwnProperty("c")) //true
console.log(b1.hasOwnProperty("d")) //true

var o = {
    name: "daixingwang"
}

function Person (){
    this.age = 26;
    this.sex = "男"
}

Person.prototype = o;

var p = new Person();

console.log(p.sex === "男");
console.log(p.name === "daixingwang");


for(var key in p){
    if(p.hasOwnProperty(key)){
        console.log(key, "自身属性");
    }else{
        console.log(key, "继承成属性");
    }
}

