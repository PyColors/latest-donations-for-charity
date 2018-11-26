import React from "react";
import Header from "./Header";

test("Render a div", () => {
  const wrapper = shallow(<Header>Hello Jest!</Header>);
  expect(wrapper).toMatchSnapshot();
});
