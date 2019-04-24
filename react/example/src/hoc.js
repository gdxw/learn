import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class TestA extends Component{
    render(){
        return (
            <div>我是一个组件，当时我想说我是真很累 {this.props.test}</div>
        )
    }
}

@addAuthor2
class TestB extends Component{
    render(){
        return (
            <div>我是一个组件，当时我想说我很累 {this.props.test}</div>
        )
    }
}

function addAuthor1(WrappedComponent){
    return class extends Component{
        render(){
            if(this.props.test == "A"){
                return null;
            }
            return (<div>
                <p>代兴旺想说(属性代理)：</p><WrappedComponent {...this.props}/>
            </div>)
            
        }
    }
} 

function addAuthor2(WrappedComponent){
    return class extends WrappedComponent{
        render(){
            if(this.props.test == "A"){
                return null;
            }
            return (<div>
                <p>代兴旺想说(反向继承)：</p>
                {super.render()}
            </div>)
            
        }
    }
} 
const Test1 = addAuthor1(TestA);
const Test2 = addAuthor2(TestA);


class Form extends Component{
    static childContextTypes = {
        model: PropTypes.object,
        changeModel: PropTypes.func
    }
    constructor(props){
        super(props);
        this.state = {
            model: props.model || {}
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.model){
            this.setState({
                model: nextProps.model
            })
        }
    }
    changeModel = (name, value) => {
        debugger
        this.setState({
          model: { ...this.state.model, [name]: value }
        })
    }
    getChildContext() {
        return {
          changeModel: this.changeModel,
          model: this.props.model || this.state.model
        };
    }
    onSubmit = () => {
        console.log(this.state.model);
    }
    render() {
        return <div>
          {this.props.children}
          <button onClick={this.onSubmit}>提交</button>
        </div>
    }
}

function proxyHoc(WrappedComponent) {
    return class extends Component {
        static contextTypes = {
            model: PropTypes.object,
            changeModel: PropTypes.func
        }
        onChange = (event) => {
            const { changeModel } = this.context;
            const { onChange } = this.props;
            const { v_model } = this.props;
            changeModel(v_model, event.target.value);
            if(typeof onChange === 'function'){
                onChange(event);
            }
        }
        render() {
            const { model } = this.context;
            const { v_model } = this.props;
            return <WrappedComponent
              {...this.props}
              value={model[v_model]}
              onChange={this.onChange}
            />;
        }
    }
}
@proxyHoc
class Input extends Component {
  render() {
    return <input {...this.props}></input>
  }
}

const FromTest = function(){
    return ( <Form >
        <Input v_model="name"></Input>
        <Input v_model="pwd"></Input>
    </Form>)
}
ReactDOM.render(
<div>
    <Test1 test="A"/>
    <Test2 test="B"/>
    <TestB/>
    <TestB/>
    <FromTest/>
</div>, document.getElementById("app"));