import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/*
    value = 입력 값
    onChange = input 변경 이벤트
    onInsert = 추가 버튼 클릭 이벤트
    비구조화 할당 방식의 함수형 컴포넌트

    원래는 const TodoInput = ({props}) =>{} 이런식이라면, 아래에서 props.onChange props.value
    이런 형태로 되어야 함.
*/ 
const TodoInput = ({value, onChange, onInsert}) =>{

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    ) 
}

export default TodoInput;