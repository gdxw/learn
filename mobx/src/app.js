import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {observable, action, computed} from "mobx";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

class TodoListStroe{
    @observable list = []

    @action addTodo(name){
        this.list.push(new TodoStroe(name))
    }

    @computed get finishedNumber(){
         let finishedList = this.list.filter(todo=>{
             return todo.finished;
         })

         return finishedList.length;
    }
}

class TodoStroe {
    @observable name = ""
    @observable finished = false
    @observable id = Math.random()

    constructor(name){
        this.name = name;
    }

    @action checkFinished(){
        this.finished = !this.finished;
    }
}

@observer
class TodoItem extends Component{
    static proTypes = {
        todo: PropTypes.object
    }
    render(){
        const todo = this.props.todo;
        return <li key={todo.id}>
                    <input type="checkbox" 
                        checked={todo.finished} 
                        onChange={()=>{ todo.checkFinished()}}/>
                        {todo.name}
                </li>
    }
}

@observer
class TodoList extends Component{
    // static proTypes = {
    //     todoList: PropTypes.array
    // }
    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        }
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        let {inputValue} = this.state;
        let {todoList} = this.props;
        todoList.addTodo(inputValue);
        this.setState({
            inputValue: ""
        })
    }

    handleChange=(e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    render(){
        const {inputValue} = this.state;
        const {todoList, todoList:{list}} = this.props;
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input name="todo" value={inputValue} placeholder="请输入todo" onChange={this.handleChange}/>
                    <button type="submit">确认</button>
                </form>
                <ul>
                    {list.map(item=><TodoItem key={item.id} todo={item}/>)}
                </ul>
                <div>{todoList.finishedNumber}/{list.length}</div>
            </Fragment>
        )
    }
}

let todoListState = new TodoListStroe();

ReactDOM.render(
    <TodoList todoList={todoListState}/>
, document.getElementById("app"));