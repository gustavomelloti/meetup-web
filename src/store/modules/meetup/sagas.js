import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  listMeetupsSuccess,
  fillMeetupToDetail,
  registerMeetupSuccess,
  registerMeetupFailure,
  cancelMeetupSuccess,
  fillMeetupToEdit,
} from './actions';

export function* listMeetupsRequest() {
  try {
    const response = yield call(api.get, 'responsibles');
    yield put(listMeetupsSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao buscar meetups.');
  }
}

export function* updateMeetupRequest({ payload: meetup }) {
  try {
    yield call(api.put, `meetups/${meetup.id}`, meetup);
    yield put(registerMeetupSuccess());
    toast.success('Meetup atualizado com sucesso!');
    history.push('/meetups');
  } catch (err) {
    yield put(registerMeetupFailure());
    toast.error('Erro ao atualizar meetup. Verifique os campos.');
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

export function* cancelMeetupRequest({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/meetups/${id}`);
    toast.success('Meetup cancelado com sucesso!');
    history.push('/meetups');
    yield put(cancelMeetupSuccess(payload));
  } catch (err) {
    yield put(registerMeetupFailure());
    toast.error('Erro ao cancelar Meetup. Verifique se o meetup já ocorreu.');
  }
}

export function* redirectToMeetupUpdate(meetup) {
  yield put(fillMeetupToDetail(meetup));
  history.push('/meetups/detail');
}

export function* redirectToUpdate({ payload }) {
  yield put(fillMeetupToEdit(payload));
  history.push('/meetups/register');
}

export default all([
  takeLatest('@meetup/LIST_MEETUPS_REQUEST', listMeetupsRequest),
  takeLatest('@meetup/REDIRECT_TO_MEETUP_DETAIL', redirectToMeetupUpdate),
  takeLatest('@meetup/REGISTER_MEETUP_REQUEST', registerMeetupRequest),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetupRequest),
  takeLatest('@meetup/REDIRECT_TO_UPDATE', redirectToUpdate),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetupRequest),
]);
