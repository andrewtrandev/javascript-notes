import React from 'react'
import ToDoItem from './ToDoItem'
class ToDolist extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            Todos: this.props.Todos
        }
    }
       //why can't lines 12-13 be out here
    render(){
        const todos = this.state.Todos.map((todos) => 
        <ToDoItem key={todos.index} todotext={todos} />)
        return todos
    }
}

export default ToDolist