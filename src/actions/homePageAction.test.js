import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import * as constantsActions from "../utils/constants_actions";
import getLatestDonationsMock from "../mocks/getLatestDonationsMock";
import { loadDataHomePage } from "./homePageAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchData actions", () => {
    beforeEach(function() {
        moxios.install();
    });

    afterEach(function() {
        moxios.uninstall();
    });

    it("Creates RECEIVE_DATA_HOME_PAGE", () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: getLatestDonationsMock
            });
        });

        const expectedActions = [
            { type: constantsActions.FETCH_DATA_HOME_PAGE },
            {
                type: constantsActions.RECEIVE_DATA_HOME_PAGE,
                dataHomePage: getLatestDonationsMock
            }
        ];

        const store = mockStore({ dataHomePage: {} });

        expect(store.getActions()).toEqual([]);

    });
});
