import input from './input';
import todos from './todos';
import {combineReducers} from 'redux';

export default combineReducers({
    input,
    todos
})

// combineReducers를 사용하여 리듀서를 합쳐서 내보냄