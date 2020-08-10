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

    render(){
        const {input, todos} = this.state; // 비구조화 할당
        const {handleChange, handleInsert} = this; // 비구조화 할당으로 this.handleChange 에서 this 생략 가능
        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
            
        );
    }
}

export default App;