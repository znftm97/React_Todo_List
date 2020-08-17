import {Map} from 'immutable';
import { handleActions, createAction} from 'redux-actions';

// yarn add redux react-redux redux-actions immutable

/*
Ducks 구조의 redux
Ducks 구조란 ActionTypes, Reducer, Actions 파일을 분리하지 않고
하나의 파일에 작성 하는 것

주의사항
reducer를 메인으로 내보내야함
액션 생성(action creators)함수를 내보내야함
*/

// 액션타입 정의 액션이름 SET_INPUT , 액션타입 정의 시 앞부분에 리듀서 이름을 적어주면
// 액션 타입이름이 다른 리듀서끼리 중복되어도 문제 없음
const SET_INPUT = 'input/SET_INPUT'; 

// 액션 생성(action creators)함수 생성
export const setInput = createAction(SET_INPUT);

// 리듀서 초기상태 정의
const initialState = Map({
    value: ''
});

// handleActions 를 이용하여 리듀서 정의(생성)
export default handleActions({
    // SET_INPUT을 []로 감싸는 이유는 위 액션타입에 접두사가 있기 때문임
    [SET_INPUT]: (state, action) =>{
        //immutable의 Map의 set 함수, js의 Map과는 다름
        //value에 action.payload 값으로 세팅
        //createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용함
        return state.set('value', action.payload)
    }
}, initialState);