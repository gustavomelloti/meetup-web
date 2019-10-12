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
