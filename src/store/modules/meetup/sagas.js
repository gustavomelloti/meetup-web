import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  listMeetupsSuccess,
  fillMeetupToDetail,
  registerMeetupSuccess,
  registerMeetupFailure,
} from './actions';

export function* listMeetupsRequest() {
  try {
    const response = yield call(api.get, 'responsibles');
    yield put(listMeetupsSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao buscar meetups.');
  }
}

export function* registerMeetupRequest({ payload }) {
  try {
    const { meetup } = payload;
    yield call(api.post, 'meetups', meetup);
    yield put(registerMeetupSuccess());
    toast.success('Meetup cadastrado com sucesso!');
    history.push('/meetups');
  } catch (err) {
    yield put(registerMeetupFailure());
    toast.error('Erro ao salvar meetup. Verifique os campos.');
  }
}

export function* redirectToMeetupUpdate(meetup) {
  yield put(fillMeetupToDetail(meetup));
  history.push('/meetups/detail');
}

export default all([
  takeLatest('@meetup/LIST_MEETUPS_REQUEST', listMeetupsRequest),
  takeLatest('@meetup/REDIRECT_TO_MEETUP_DETAIL', redirectToMeetupUpdate),
  takeLatest('@meetup/REGISTER_MEETUP_REQUEST', registerMeetupRequest),
]);
