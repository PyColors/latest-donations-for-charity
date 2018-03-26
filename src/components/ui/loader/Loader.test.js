import React from "react";
import Loader from "./Loader";

test("Render a div", () => {
  const wrapper = shallow(<div>Hello Jest!</div>);
  expect(wrapper).toMatchSnapshot();
});

