const initialState = {
  meetups: [],
  detail: { File: {}, date: '' },
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
      return { ...state, loading: false, detail: {} };
    case '@meetup/REGISTER_MEETUP_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
}
