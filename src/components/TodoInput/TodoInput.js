import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/*
    value = 입력 값
    onChange = input 변경 이벤트
    onInsert = 추가 버튼 클릭 이벤트
*/ 
const TodoInput = ({value, onChange, onInsert}) =>{
    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onkeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onclick={onInsert}>추가</div>
        </div>
    ) 
}

export default TodoInput;