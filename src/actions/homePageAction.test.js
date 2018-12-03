import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import * as constantsActions from "../utils/constants_actions";
import getLatestDonationsMock from "../mocks/getLatestDonationsMock";
import {fetchData, loadDataHomePage} from './homePageAction'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchData actions", () => {
    beforeEach(function() {
        moxios.install();
    });

    afterEach(function() {
        moxios.uninstall();
    });

  describe("Actions", () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: getLatestDonationsMock
            });
        });

    it('Return dataHomePage', () => {
      const expectedData = { dataHomePage: getLatestDonationsMock }
      const store = mockStore({
        dataHomePage: getLatestDonationsMock
      })
      expect(store.getState(fetchData)).toEqual(expectedData);
      expect(store.getState()).toMatchSnapshot();
    });
  });
});

