
import { watchUserLogin, watchUserLogouth, watchUserRegistration } from './auth.saga';
import { all } from '@redux-saga/core/effects';

export default function* rootSaga() {
    yield all([
        watchUserLogin(),
        watchUserLogouth(),
        watchUserRegistration()
    ])
}