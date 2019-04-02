var o = {
    name: "11111"
}

function Person(){
    this.title = "xxxx"
}

var a = new Person();

Person.prototype = o;

var b = new Person();

console.log(a.title);
console.log(b.title);

console.log(a.name);
console.log(b.name);

console.log(o.isPrototypeOf(a)) //false
console.log(o.isPrototypeOf(b)) //true