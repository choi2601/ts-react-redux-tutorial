import { createStandardAction, ActionType, createReducer } from 'typesafe-actions';

// const ADD_TODO= 'todos/ADD_TODO' as const;
// const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
// const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

const ADD_TODO= 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})

// 파라미터로 받아 온 데이터와 리턴되는 action.payload 값이 다르면 createStandardAction을 안 쓰는 것이 더 좋을 수 있음
// export const addTodo = createAction(ADD_TODO, action => (text: string) => action({
//     id: nextId++,
//     text
// }))

// export const toggleTodo = (id: number) => ({
//     type: TOGGLE_TODO,
//     payload: id
// })

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();

// export const removeTodo = (id: number) => ({
//     type: REMOVE_TODO,
//     payload: id
// })

export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

// type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo> | ReturnType<typeof removeTodo>
const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [];

// function todos(state: TodosState = initialState, action: TodosAction): TodosState {
//     switch(action.type) {
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false,
//             })
//         case TOGGLE_TODO:
//             return state.map(todo =>
//                 todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//                 )
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id !== action.payload)
//         default:
//             return state
//     }
// }

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => state.concat({
        ...action.payload,
        done: false
    }),
    [TOGGLE_TODO]: (state, action) => state.map(
        todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
    [REMOVE_TODO]: (state, action) => state.filter(todo => todo.id !== action.payload)
})

export default todos;