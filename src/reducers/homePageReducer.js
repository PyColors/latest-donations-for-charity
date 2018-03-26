import * as constantsActions from "../utils/constants_actions";

const homePageReducer = (
  state = {
    isLoading: true,
    dataHomePage: {},
    error: null
  },
  action
) => {
  switch (action.type) {
    case constantsActions.FETCH_DATA_HOME_PAGE:
      return Object.assign({}, state, {
        isLoading: true
      });

    case constantsActions.RECEIVE_DATA_HOME_PAGE:
      return Object.assign({}, state, {
        isLoading: false,
        dataHomePage: action.dataHomePage
      });

    case constantsActions.FAILED_RECIEVE_DATA_HOME_PAGE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });

    default:
      return state;
  }
};

export default homePageReducer;
