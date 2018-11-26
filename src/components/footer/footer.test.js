import React from "react";
import Footer from "./Footer";

test("Render a div", () => {
  const wrapper = shallow(<Footer>Hello Jest!</Footer>);
  expect(wrapper).toMatchSnapshot();
});
