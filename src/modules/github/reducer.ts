import { createReducer } from 'typesafe-actions';
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR, getUserProfileAsync } from './actions';
import { GithubAction, GitHubState } from './types';

// const initialState: GitHubState = {
//     userProfile: {
//         loading: false,
//         error: null,
//         data: null,
//     }
// }
const initialState: GitHubState = {
    userProfile: asyncState.initial()
}

// const github = createReducer<GitHubState, GithubAction>(initialState, {
//     [GET_USER_PROFILE]: (state) => ({
//         ...state,
//         userProfile: {
//             loading: true,
//             error: null,
//             data: null
//         }
//     }),
//     [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//         ...state,
//         userProfile: {
//             loading: false,
//             error: null,
//             data: action.payload
//         }
//     }),
//     [GET_USER_PROFILE_ERROR]: (state, action) => ({
//         ...state,
//         userProfile: {
//             loading: false,
//             error: action.payload,
//             data: null
//         }
//     })
// })
// const github = createReducer<GitHubState, GithubAction>(initialState, {
//     [GET_USER_PROFILE]: (state) => ({
//         ...state,
//         // userProfile: asyncState.load(state.userProfile.data) 파라미터의 타입 값을 T | null로 수정해줘야 함
//         userProfile: asyncState.load()
//     }),
//     [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//         ...state,
//         userProfile: asyncState.success(action.payload)
//     }),
//     [GET_USER_PROFILE_ERROR]: (state, action) => ({
//         ...state,
//         userProfile: asyncState.error(action.payload)
//     })
// })
// const github = createReducer<GitHubState, GithubAction>(initialState)
//     .handleAction([getUserProfileAsync.request, getUserProfileAsync.success, getUserProfileAsync.failure], createAsyncReducer(getUserProfileAsync, 'userProfile'))
const github = createReducer<GitHubState, GithubAction>(initialState)
    .handleAction(transformToArray(getUserProfileAsync), createAsyncReducer(getUserProfileAsync, 'userProfile'))

export default github;