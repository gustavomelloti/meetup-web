export function listMeetupsRequest() {
  return {
    type: '@meetup/LIST_MEETUPS_REQUEST',
  };
}

export function listMeetupsSuccess(meetups) {
  return {
    type: '@meetup/LIST_MEETUPS_SUCCESS',
    payload: meetups,
  };
}

export function redirectToMeetupDetail(meetup) {
  return {
    type: '@meetup/REDIRECT_TO_MEETUP_DETAIL',
    payload: meetup,
  };
}

export function fillMeetupToDetail({ payload }) {
  return {
    type: '@meetup/FILL_MEETUP_TO_DETAIL',
    payload,
  };
}

export function registerMeetupRequest(meetup) {
  return {
    type: '@meetup/REGISTER_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function registerMeetupSuccess() {
  return {
    type: '@meetup/REGISTER_MEETUP_SUCCESS',
  };
}

export function registerMeetupFailure() {
  return {
    type: '@meetup/REGISTER_MEETUP_FAILURE',
  };
}

export function cancelMeetupRequest(meetup) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: meetup,
  };
}

export function cancelMeetupSuccess(meetup) {
  return {
    type: '@meetup/CANCEL_MEETUP_SUCCESS',
    payload: meetup,
  };
}

export function redirectToUpdate(meetup) {
  return {
    type: '@meetup/REDIRECT_TO_UPDATE',
    payload: meetup,
  };
}

export function fillMeetupToEdit(meetup) {
  return {
    type: '@meetup/FILL_MEETUP_TO_UPDATE',
    payload: meetup,
  };
}

export function updateMeetupRequest(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: meetup,
  };
}
