import React from "react";
import HomePage from "./HomePage";
import axios from "axios";
test("Render a div", () => {
  const wrapper = shallow(<div>Hello Jest!</div>);
  expect(wrapper).toMatchSnapshot();
});
