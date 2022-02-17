import { AsyncActionCreator, PayloadAction } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';

type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

function isPayloadAction(action: any): action is PayloadAction<string, any> { //type guard 
    return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>( // 여기서 T는 액션 타입을 의미하고 P는 action의 payload를 의미 / T2 = SUCCESS & T3 = FAILURE
    asyncActionCreator: AsyncActionCreator<[T1,P1], [T2, P2], [T3, P3]>,
    promiseCreator: PromiseCreatorFunction<P1, P2>
) {
    return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
        try {
            const result: P2 = isPayloadAction(action) ? yield call(promiseCreator, action.payload) : yield call(promiseCreator); //  yield call(promiseCreator, action.payload) => action이 없는 경우도 있기 때문에 (action as any).payload로 설정
            yield put(asyncActionCreator.success(result));
        } catch(e: any) {
            yield put(asyncActionCreator.failure(e));
        }
    }
}