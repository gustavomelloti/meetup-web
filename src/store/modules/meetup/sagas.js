import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { listMeetupsSuccess, fillMeetupToUpdate } from './actions';

export function* listMeetupsRequest() {
  try {
    const response = yield call(api.get, 'responsibles');
    yield put(listMeetupsSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao buscar meetups.');
  }
}

export function* redirectToMeetupUpdate(meetup) {
  yield put(fillMeetupToUpdate(meetup));
  history.push('/meetup/update');
}

export default all([
  takeLatest('@meetup/LIST_MEETUPS_REQUEST', listMeetupsRequest),
  takeLatest('@meetup/REDIRECT_TO_MEETUP_UPDATE', redirectToMeetupUpdate),
]);
