import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component{
    render(){
        return(
            <div>
                <TodoItem done>done add</TodoItem>
                <TodoItem> done remove</TodoItem>
            </div>
        )
    }
}

export default TodoList;