import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

// classnames로 styles 바인딩, styles.page-template -> page-template로 작성 가능
const cx = classNames.bind(styles);

// 함수형 컴포넌트, children은 App.js에서 PageTmplate 컴포넌트 안에 텍스트 전달해주는 것 같음
const PageTemplate = ({children}) => {
    return(
        <div className={cx('page-template')}>
            <h1>Todo List</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate;