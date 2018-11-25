import React from "react";
import HomePage from "./HomePage";

test("Render a div", () => {
  const wrapper = shallow(<HomePage>Hello Jest!</HomePage>);
  expect(wrapper).toMatchSnapshot();
});
