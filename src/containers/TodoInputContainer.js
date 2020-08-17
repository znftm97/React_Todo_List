import React, {Component} from 'react';
import TodoInput from '../components/TodoInput/TodoInput.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// 액션 생성 함수들을 한번에 불러옴
import * as InputActions from '../modules/input';
import * as TodosActions from '../modules/todos';

class TodoInputContainer extends Component{
    id=-1
    getId= () =>{
        return ++this.id;
    }

    handleChange = (e) =>{
        const {value} = e.target;
        const {InputActions} = this.props;
        InputActions.setInput(value);
        // = this.props.InputActions.setInput(e.target.value);
    }

    handleInsert = () =>{
        const { InputActions, TodosActions, value} = this.props;
        const todo ={
            id: this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todo);

        // 입력하고 input부분 빈칸으로 초기화 해줌
        InputActions.setInput('');
    }


    render(){
        const {value} = this.props;
        const {handleChange,handleInsert} = this;
        return(
            <TodoInput
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}
            />
        );
    }
}

// 클래스형 컴포넌트에서는 connect함수 사용하지만 함수형 컴포넌트에서는
// Hooks을 사용하기 떄문에 connect함수는 쓸일이 많지않을 것 같음
// useSelector, useDispatch가 대신할 것
export default connect(
    // 액션생성 함수들이 들어있는 객체
    (state) => ({
        value: state.input.get('value')
    }),

    // 일일이 dispatch 안해도 됨
    // 나중에 이를 호출할때 this.props.InputActions.setInput 하면 됨
    (dispatch) => ({
        InputActions: bindActionCreators(InputActions, dispatch),
        TodosActions: bindActionCreators(TodosActions, dispatch)
    })
)(TodoInputContainer);