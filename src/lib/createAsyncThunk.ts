import { Dispatch } from 'redux';
import { AsyncActionCreator } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreator<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<A extends AnyAsyncActionCreator, F extends AnyPromiseCreator>(
    asyncActionCreator: A, promiseCreator: F
) {
    
}