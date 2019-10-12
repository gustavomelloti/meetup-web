const initialState = {
  meetups: [],
  detail: { banner: {}, date: '' },
  editMeetup: {},
  loading: false,
};

export default function meetup(state = initialState, action) {
  switch (action.type) {
    case '@meetup/LIST_MEETUPS_SUCCESS':
      return { ...state, meetups: action.payload };
    case '@meetup/FILL_MEETUP_TO_DETAIL':
      return { ...state, detail: action.payload };
    case '@meetup/REGISTER_MEETUP_REQUEST':
      return { ...state, loading: true };
    case '@meetup/REGISTER_MEETUP_SUCCESS':
      return {
        ...state,
        loading: false,
        detail: initialState.detail,
        editMeetup: {},
      };
    case '@meetup/REGISTER_MEETUP_FAILURE':
      return { ...state, loading: false };
    case '@meetup/CANCEL_MEETUP_SUCCESS':
      return { ...state, detail: initialState.detail, loading: false };
    case '@meetup/FILL_MEETUP_TO_UPDATE':
      return { ...state, editMeetup: action.payload };
    default:
      return state;
  }
}
