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

export function redirectToMeetupUpdate(meetup) {
  return {
    type: '@meetup/REDIRECT_TO_MEETUP_UPDATE',
    payload: meetup,
  };
}

export function fillMeetupToUpdate(meetup) {
  return {
    type: '@meetup/FILL_MEETUP_TO_UPDATE',
    payload: meetup,
  };
}
