import React from "react";
import HomePage from "./HomePage";

test("Render a div", () => {
  const wrapper = shallow(<div>Hello Jest!</div>);
  expect(wrapper).toMatchSnapshot();
});
