import { observable, toJS , computed , autorun} from "mobx";

// let store = observable(["111","2222"]);

// console.log(store);

// console.log(toJS(store));


class Store {
    // 数组
    @observable array1 = [111, 111]

    //字符串
    @observable name = "daixingwang"

    @observable maptest = new Map([["sex","男"],["age", 12],["school", "人民大学"]])

    @observable obj1 = {
        text: 111,
        dec: "2222222"
    }

    @computed get sayby(){
        return `${this.name}: I'M ${this.name}, 岁数：${this.maptest.get('age')}`;
    }

    saylog = autorun(()=>{
        console.log(`${this.name}in xxxxx asdasdas`);
    })
}

let store1 = new Store();

store1.saylog()
// console.log(store1.array1);
// Object.keys(store1.__proto__).forEach(key=>{
//     console.log(toJS(store1[key]));
// })

console.log(store1.maptest.has("sex"))

// store1.array1.push("2222");

// console.log(store1.array1);

console.log(store1.sayby);

store1.name = "xxxxssss";

store1.name = "xxxxsssskkkk";
