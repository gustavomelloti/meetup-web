const initialState = {
  meetups: [],
  updateMeetup: {},
};

export default function meetup(state = initialState, action) {
  switch (action.type) {
    case '@meetup/LIST_MEETUPS_SUCCESS':
      return { ...state, meetups: action.payload };
    case '@meetup/FILL_MEETUP_TO_UPDATE':
      return { ...state, updateMeetup: action.payload };
    default:
      return state;
  }
}
