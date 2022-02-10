import { createStandardAction, createReducer, ActionType, action } from 'typesafe-actions';
// 버전 4이상부터는 createStandardAction이 createAction으로 바뀜


// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';
//액션 타입 선언 안하고 바로 createStandardAction에 액션 타입 정의해줘도 됨

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

// type CounterAction = { type: 'counter/INCREASE' }
// type CounterAction = { type: typeof INCREASE }
// type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;
// 함수의 결과물의 타입을 가져올 수 있음

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// function counter(state: CounterState = initialState, action: CounterAction) {
//     switch(action.type) {
//         case INCREASE: 
//             return { count: state.count + 1 };
//         case DECREASE:
//             return { count: state.count - 1 };
//         case INCREASE_BY:
//             return { count: state.count + action.payload };
//         default:
//             return state;
//     }
// }
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//     [INCREASE]: (state) => ({ count: state.count + 1 }),
//     [DECREASE]: (state) => ({ count: state.count - 1 }),
//     [INCREASE_BY]: (state, { payload }) => ({ count: state.count + payload })
// })

const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(INCREASE, state => ({ count: state.count + 1 }))
    .handleAction(DECREASE, (state) => ({ count: state.count - 1 }))
    .handleAction(INCREASE_BY, (state, action) => ({ count: state.count + action.payload }))

// const counter = createReducer<CounterState>(initialState)
//     .handleAction(increase, state => ({ count: state.count + 1 }))
//     .handleAction(decrease, (state) => ({ count: state.count - 1 }))
//     .handleAction(increaseBy, (state, action) => ({ count: state.count + action.payload }))

export default counter;