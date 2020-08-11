import React, { Component, children } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component{
    // 성능 최적화
    // done값 변경이 없으면 false값 반환해서 리렌더링 방지함.
    shouldComponentUpdate(nextProps, nextState){
        return this.props.done !== nextProps.done;
    }
    render(){
        /*비구조화 할당 문법, 이 컴포넌트가 어떤 props를 사용하는지 쉽게 파악,
          this.props 생략 가능*/
        const {done, children, onToggle, onRemove} = this.props;

        return(
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly />
                <div className={cx('text', {done})}> {children} </div>
                <div className={cx('delete')} onClick={(e) => { 
                    onRemove();
                    e.stopPropagation(); 
                    /*자식요소에 onClick 이벤트가 존재하고, 부모 div에서도 onClick 이벤트 존재시
                      자식(onRemove) -> 부모(onToggle) 순으로 메서드 실행함. 이를 propagation이라함. 따라서 제대로 삭제가 되지않음
                      이를 방지하기위해 onClick 처리함수 내부에서 e.stopPropagation 호출함.*/
                }}> 삭제 </div>
            </div>
        );
    }
}

export default TodoItem;