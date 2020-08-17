import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import modules from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 리덕스 스토어 생성
// createStore(reducer, [preloadedState], [enhancer])
// window.devtoolsExtension은 디버깅을 위한 확장도구, 굳이 필요 없음
const store = createStore(modules, window.devToolsExtension && window.devToolsExtension());

// Provider는 react-redux 라이브러리에 내장된, 리액트 앱에 store를 
// 쉽게 연동 가능하도록 도와주는 컴포넌트
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
