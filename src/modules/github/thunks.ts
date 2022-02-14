import { ThunkAction } from 'redux-thunk';
// import { Dispatch } from 'redux';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfileAsync } from './actions';
import { getUserProfile } from '../../api/github';
import createAsyncThunk from '../../lib/createAsyncThunk';

// export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
//     return async (dispatch, getState) => {
        
//     }
// }

// export function getUserProfileThunk(username: string) {
//     return async (dispatch: Dispatch, getState: () => RootState) => {
//         const state = getState();

//         const { request, success, failure } = getUserProfileAsync;
//         dispatch(request());
//         try {
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile));
//         } catch(e: any) {
//             dispatch(failure(e));
//         }
//     }
// }

export const getUserProfileThunk = createAsyncThunk(
    getUserProfileAsync,
    getUserProfile
)