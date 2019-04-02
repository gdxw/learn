let TestObj = {
    foo: 1,
    bar: 2,
    get baz(){
        return this.foo + this.bar;
    }
}

Reflect.get(TestObj,"foo");

console.log(Reflect.get(TestObj,"foo"));



function * foo(){
    yield "11111";
    yield "222222";
    return "end";
}

var xxx = foo()
console.log(xxx.next());
console.log(xxx.next());
console.log(xxx.next());
console.log(xxx.next());