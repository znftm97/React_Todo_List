import React, { Component, children } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component{
    render(){
        /*비구조화 할당 문법, 이 컴포넌트가 어떤 props를 사용하는지 쉽게 파악,
          this.props 생략 가능*/
        const {done, children, onToggle, onRemove} = this.props;

        return(
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly />
                <div className={cx('text', {done})}> {children} </div>
                <div className={cx('delete')} onClick={onRemove}> 삭제 </div>
            </div>
        );
    }
}

export default TodoItem;