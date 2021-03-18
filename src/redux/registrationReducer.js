import { REGISTRATION_SUCCESS, QUIT } from './constants';

const initialState = {
  isRegistration: false,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return { ...state, isRegistration: true };
    case QUIT:
      return { ...state, isRegistration: false };
    default:
      return state;
  }
};

export default registrationReducer;
