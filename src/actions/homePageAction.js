import * as constantsActions from "../utils/constants_actions";
import axios from "axios";

export function fetchDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  };
}

export function fetchData() {
  return dispatch => {
    dispatch(beginFetchData());
    axios
      .get(`https://api.justgiving.com/2e610e0e/v1/charity/2116`)
      .then(res => {
        dispatch(loadDataHomePage(res));
      })
      .catch(error => {
        const response = error.response;

        if (response === undefined) {
          dispatch(fetchFailure(error));
        } else {
          error.status = response.status;
          error.statusText = response.statusText;
          response.text().then(text => {
            try {
              const json = JSON.parse(text);
              error.message = json.message;
            } catch (ex) {
              error.message = text;
            }
            dispatch(fetchFailure(error));
          });
        }
      });
  };
}

function shouldFetchData(state) {
  if (state === null) {
    return false;
  } else {
    return true;
  }
}

const beginFetchData = () => ({
  type: constantsActions.FETCH_DATA_HOME_PAGE
});

const loadDataHomePage = payload => ({
  type: constantsActions.RECEIVE_DATA_HOME_PAGE,
  dataHomePage: payload.data
});

const fetchFailure = () => ({
  type: constantsActions.FAILED_RECIEVE_DATA_HOME_PAGE,
  error: true
});
