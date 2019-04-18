import _ from "underscore";
import React from "react";
import ReactDOM from "react-dom";

function setMixin(target, mixin){
    if(arguments[2]){
        for (var i = 2, len = arguments.length; i < len; i++) {
            target.prototype[arguments[i]] = mixin[arguments[i]];
        }
    }else{
        for(var methodName in mixin.prototype){
            if(!Object.hasOwnProperty(target.prototype, methodName)){
                target.prototype[methodName] = mixin[methodName]
            }
        }
    }
}

// var LogMixin = {
//     actionLog: function(){
//         console.log("action...")
//     },
//     requestLog: function(){
//         console.log("request...")
//     }
// }

// function User(){
//     /** ... */
// }

// function Goods(){
//     /** ... */
// }
// //使用underscore处理
// _.extend(User.prototype, LogMixin);
// _.extend(Goods.prototype, LogMixin)

// //使用手写Mixin
// setMixin(User,LogMixin,'actionLog');
// setMixin(Goods,LogMixin,'requestLog');

// var user = new User();
// var good = new Goods();

// user.actionLog();
// good.requestLog();


/**
 * 下面这段代码需要 react15及以下版本才能支持运行
 */
// var LogMixin = {
//     log: function() {
//         console.log('log');
//     },
//     componentDidMount: function() {
//         console.log('in');
//     },
//     componentWillUnmount: function() {
//         console.log('out');
//     }
// };

// var User = React.createClass({
//     mixins: [LogMixin],
//     render: function() {
//         return (<div>...</div>)
//     }
// });

// var Goods = React.createClass({
//     mixins: [LogMixin],
//     render: function() {
//         return (<div>...</div>)
//     }
// });

// ReactDOM.render(
//     <div>
//         <User/>
//         <Goods/>
//     </div>
// , document.getElementById("app"))

