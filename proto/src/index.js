function classA(){

}

var objA = new classA();
var objB = new classA();

objA.__proto__.say = function(){
    console.log("111")
}

objA.say();
objB.say();

objA.__proto__= {
    say: function(){
        console.log("222")
    }
}

objA.say();
objB.say();



