import homePageReducer from "./homePageReducer";
import * as constantsActions from "../utils/constants_actions";
import getLatestDonationsMock from "../mocks/getLatestDonationsMock";

describe("homePageReducer", () => {
  it("returns proper initial state", () => {
    expect(homePageReducer(undefined, {})).toEqual({
      isLoading: true,
      dataHomePage: {},
      error: null
    });
  });

  it("Should handle FETCH_DATA_HOME_PAGE", () => {
    const startAction = {
      type: constantsActions.FETCH_DATA_HOME_PAGE
    };
    expect(homePageReducer({}, startAction)).toEqual({ isLoading: true });
  });

  it("Should handle RECEIVE_DATA_HOME_PAGE", () => {
    const successAction = {
      type: constantsActions.RECEIVE_DATA_HOME_PAGE,
      dataHomePage: getLatestDonationsMock.data
    };
    expect(homePageReducer({}, successAction)).toEqual({
      dataHomePage: undefined,
      isLoading: false
    });
  });

  it("Should handle FAILED_RECIEVE_DATA_HOME_PAGE", () => {
    const failAction = {
      type: constantsActions.FAILED_RECIEVE_DATA_HOME_PAGE,
      error: { success: false }
    };
    expect(homePageReducer({}, failAction)).toEqual({
      isLoading: false,
      error: { success: false }
    });
  });
});
