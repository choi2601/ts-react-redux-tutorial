import { Dispatch } from 'redux';
import { AsyncActionCreator } from 'typesafe-actions'; // createAsyncCreator에 대한 타입 값

type AnyAsyncActionCreator = AsyncActionCreator<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<A extends AnyAsyncActionCreator, F extends AnyPromiseCreator>(
    asyncActionCreator: A, promiseCreator: F
) {
    type Params = Parameters<F>;
    return function thunk(...params: Params) {
        return async(dispatch: Dispatch) => {
            const { request, success, failure } = asyncActionCreator;
            dispatch(request(undefined));
            try {
                const result = await promiseCreator(...params);
                dispatch(success(result));
            } catch(e: any) {
                dispatch(failure(e));
            }
        }
    }
}

// function sum(a: number, b: number) {
//     return a + b;
// }

// type F = Parameters<typeof sum> 파라미터의 타입값들을 배열 형식으로 가져 옴 [number, number]
// type S = ReturnType<typeof sum>