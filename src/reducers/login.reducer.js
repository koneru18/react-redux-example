import constants from '../constants';

const initialState = {
    loading: false,
    user: {},
    error: {},
  };

export default function login(state = initialState, action) {
  console.log(`in reducer: ${JSON.stringify(action)}`);
    switch (action.type) {
      case constants.LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case constants.LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.user
        };
      case constants.LOGIN_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error
        };
      default:
        return state
    }
  }