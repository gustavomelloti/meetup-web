const initialState = {
  meetups: [],
  updateMeetup: {},
  loading: false,
};

export default function meetup(state = initialState, action) {
  switch (action.type) {
    case '@meetup/LIST_MEETUPS_SUCCESS':
      return { ...state, meetups: action.payload };
    case '@meetup/FILL_MEETUP_TO_UPDATE':
      return { ...state, updateMeetup: action.payload };
    case '@user/REGISTER_MEETUP_REQUEST':
      return { ...state, loading: true };
    case '@user/REGISTER_MEETUP_SUCCESS':
      return { ...state, loading: false, updateMeetup: {} };
    case '@user/REGISTER_MEETUP_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
}
