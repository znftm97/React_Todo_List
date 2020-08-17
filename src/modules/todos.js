import {Map , List} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

// 액션타입(ActionTypes) 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수 생성
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 리듀서 초기상태 정의
const initialState = List([
    Map({
        id: 0,
        text: '000',
        done : true
    }),
    Map({
        id: 1,
        text: '111',
        done : false
    })
]);

// 리듀서 생성
export default handleActions({
    [INSERT] : (state, action) =>{
        // payload 안에 있는 id, text, done의 래퍼런스 만들어줌
        // 원래는 push(Map(actioc.paylod))
        // 이 액션이 어떤 데이터를 처리하는지 쉽게 파악 가능
        const {id, text, done} = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },

    [TOGGLE] : (state, action) =>{
        /*
            비구조화 할당으로 index 래퍼런스에 action.payload 값을 넣음
            필수작업은 아니며, payload가 어떤 값을 의미하는지
            쉽게 파악하기 위해
        */
        const {payload : index} = action;
        // = const index = action.payload;
        

        // updateIn으로 현재값 참조하여 done 반대값으로 설정
        return state.updateIn([index, 'done'], done => !done);
        // = return state.setIn([index, 'done'], !state.getIn([0, index]));
    },

    [REMOVE] : (state, action) => {
        const {payload : index} = action;
        return state.delete(index);
    }
},initialState)