import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { getProjects } from '../services/api';
import { browserHistory } from 'react-router';

function* fetchRecentProjects(feathersApp) {
    const projects = yield call(getRecentProjects, feathersApp);
    yield put({type: "RECENT_PROJECT_SUCCEEDED", projects})
}

function* recentProjectsSaga(feathersApp) {
    yield* takeEvery("RECENT_PROJECT_REQUESTED",fetchRecentProjects, feathersApp);
}

export default function* root(feathersApp) {
    yield [
        fork ( recentProjectsSaga , feathersApp ) 
    ]
}


