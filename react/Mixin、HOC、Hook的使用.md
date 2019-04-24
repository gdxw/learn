页面和组件变得越来越复杂，如何更好的实现状态逻辑复用一直都是应用程序中重要的一部分，这直接关系着应用程序的质量以及维护的难易程度。下面从三种不同的技术来实现react组件代码的复用。

## Mixin设计模式

![img](./img/640.jpeg)

Mixin（混入）是一种通过扩展收集功能的方式，它本质上是将一个对象的属性拷贝到另一个对象上面去，不过你可以拷贝任意多个对象的任意个方法到一个新对象上去，这是继承所不能实现的。它的出现主要就是为了解决代码复用问题。

很多开源库提供了Mixin的实现，如Underscore的_.extend方法、JQuery的extend方法。

使用_.extend方法实现代码复用：

``` js
var LogMixin = {
  actionLog: function() {
    console.log('action...');
  },
  requestLog: function() {
    console.log('request...');
  },
};
function User() {  /*..*/  }
function Goods() {  /*..*/ }
_.extend(User.prototype, LogMixin);
_.extend(Goods.prototype, LogMixin);
var user = new User();
var good = new Goods();
user.actionLog();
good.requestLog();
```

手动写一个简单的Mixin方法：

``` js
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
setMixin(User,LogMixin,'actionLog');
setMixin(Goods,LogMixin,'requestLog');
```

React中应用Mixin

React也提供了Mixin的实现，如果完全不同的组件有相似的功能，我们可以引入来实现代码复用，当然只有在使用createClass来创建React组件时才可以使用，因为在React组件的es6写法中它已经被废弃掉了。

例如下面的例子，很多组件或页面都需要记录用户行为，性能指标等。如果我们在每个组件都引入写日志的逻辑，会产生大量重复代码，通过Mixin我们可以解决这一问题：

``` jsx
var LogMixin = {
  log: function() {
    console.log('log');
  },
  componentDidMount: function() {
    console.log('in');
  },
  componentWillUnmount: function() {
    console.log('out');
  }
};

var User = React.createClass({
  mixins: [LogMixin],
  render: function() {
    return (<div>...</div>)
  }
});

var Goods = React.createClass({
  mixins: [LogMixin],
  render: function() {
    return (<div>...</div>)
  }
});

```

### Mixin带来的危害

React官方文档在Mixins Considered Harmful一文中提到了Mixin带来了危害：

* Mixin 可能会相互依赖，相互耦合，不利于代码维护
* 不同的 Mixin 中的方法可能会相互冲突
* Mixin非常多时，组件是可以感知到的，甚至还要为其做相关处理，这样会给代码造成滚雪球式的复杂性

React现在已经不再推荐使用Mixin来解决代码复用问题，因为Mixin带来的危害比他产生的价值还要巨大，并且React全面推荐使用高阶组件来替代它。另外，高阶组件还能实现更多其他更强大的功能，在学习高阶组件之前，我们先来看一个设计模式。
