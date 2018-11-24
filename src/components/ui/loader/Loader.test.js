import React from "react";
import Loader from "./Loader";

test("Render a div", () => {
  const wrapper = shallow(<Loader>Hello Jest!</Loader>);
  expect(wrapper).toMatchSnapshot();
});

