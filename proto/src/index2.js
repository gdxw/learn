function Animal(x,y){
    this.x = x;
    this.y = y;
    this.say = function(){
        console.log(this.x + " ---- " + this.y);
    }
}

function Dog(x,y){
    // Animal.apply(this,[x,y]);
    Animal.call(this,x , y);
    this.say = function(){
        console.log(this.x + " ===== " + this.y);
    }
}

var a = new Animal("猴子", "爬树");

var b = new Dog("狗", "咆哮");

a.say();
b.say();

console.log(Object.prototype === Animal.prototype.__proto__); //true
console.log(a.constructor === Animal);  //true

console.log(a.__proto__ === Animal.prototype); //true

console.log(b.__proto__ === Dog.prototype); //true

console.log(b.__proto__.__proto__ === Object.prototype ); //true

console.log(b.__proto__.__proto__.__proto__ === null ); //true

console.log(a.prototype === undefined); //true

console.log(Animal.prototype.__proto__ === Object.prototype);

console.log(b instanceof Dog) //true
console.log(b instanceof Animal) //false

console.log(b instanceof Object) //true
console.log(b instanceof Function) //false

console.log(Object instanceof Function) //true
console.log(Function instanceof Object) //true

console.log(a.constructor instanceof Function);  //true
console.log(a.constructor instanceof Object);  //true
