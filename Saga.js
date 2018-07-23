import { takeEvery, put, all } from "redux-saga/effects";

function* setResult() {
    try {
        // dispatch a success action to the store with the new dog
        yield put({ type: "ADD", payload: 100 });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "ADD_FAIL", error });
    }
}

function* setAge() {
    try {
        // dispatch a success action to the store with the new dog
        yield put({ type: "setAge", payload: 22 });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "setAge_FAIL", error });
    }
}

function* updateResource() {
    yield all([
        setAge()
    ])
}

//ตรวจจับ
export function* watchUpdateResource() {
    yield takeEvery('setName', updateResource);
}

//รวม Saga ไว้
export default function* rootSaga() {
    yield all([
        setResult(),
        watchUpdateResource()
    ])
}