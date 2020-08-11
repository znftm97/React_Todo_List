import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

// classnames로 styles 바인딩, styles.page-template -> page-template로 작성 가능
// yarn add classnames
const cx = classNames.bind(styles);

/*
함수형 컴포넌트, children은 App.js에서 PageTmplate 컴포넌트 안에
컴포넌트들을 의미
*/
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