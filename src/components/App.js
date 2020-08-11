import React, {Component} from 'react';
import PageTemplate from './PageTemplate/PageTemplate';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

class App extends Component{
    state = {
        input: '' ,// input 값
        todos: [
            { id : 0, text: 'done true', done:true},
            { id : 1, text: 'done false', done:false}
        ]
    }

    id = 1
    //id 값 반환
    getId = () =>{
        return ++this.id;
    }

    // input에 입력한 값을 state의 input에 넣어줌
    handleChange= (e) =>{
        this.setState({
            input: e.target.value
        });
    }

    // 일정 추가 함수
    handleInsert = () =>{
        const {todos, input} = this.state;

        //새 데이터 객체 생성
        const newTodo = {
            text : input,
            done : false,
            id: this.getId()
        };

        // 배열에 새 데이터 객체 추가, 전개연산자 사용
        this.setState({
            todos: [...todos, newTodo],
            input:''
        });
    }

    /* 
    Item 클릭시 활성화 비활성화, id로 배열 인덱스 찾음
    findIndex 함수는 특정요소가 배열에서 몇번째 요소인지 찾기 위한 함수
    매개변수에는 콜백함수이며, true값 반환할때가지 0부터 순차탐색함
    true 값 반환시 순차탐색 중지하고 해당 요소의 인덱스 반환 
    */
    handleToggle = (id) =>{
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        // 찾은 id값을 가진 데이터의 done값을 반전
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        // slice로 index값 전후 데이터 복사
        // 그리고 그 사이에 변경된 todo(toggled) 객체 넣어줌
        this.setState({
            todos: [
                ...todos.slice(0,index),
                toggled,
                ...todos.slice(index+1, todos.length)
            ]
        });
    }

    render(){
        const {input, todos} = this.state; // 비구조화 할당
        const {handleChange, handleInsert, handleToggle} = this; // 비구조화 할당으로 this.handleChange 에서 this 생략 가능
        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos} onToggle={handleToggle}/>
            </PageTemplate>
            
        );
    }
}

export default App;