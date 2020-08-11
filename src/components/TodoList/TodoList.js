import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component{
    // 성능 최적화, todos props가 바뀔때만 리렌더링 되도록
    // todos값 변경이 없으면 false값 반환해서 리렌더링 방지함.
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render(){
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            todo =>(
                <TodoItem 
                key={todo.id} 
                done={todo.done} 
                onToggle={()=> onToggle(todo.id)}
                onRemove={() => onRemove(todo.id)}>
                    {todo.text}
                </TodoItem>
            )
        );

        return(
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList;