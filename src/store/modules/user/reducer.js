const initialState = {
  profile: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return { ...state, profile: action.payload.user };
    default:
      return state;
  }
}
