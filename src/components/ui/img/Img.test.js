import React from "react";
import Img from "./Img";

test("Render a img", () => {
  const wrapper = shallow(<img>Hello Jest!</img>);
  expect(wrapper).toMatchSnapshot();
});

describe("Img />", () => {
  it("should render an <figure> tag", () => {
    const renderedComponent = shallow(<Img />);
    expect(renderedComponent.type()).toEqual("figure");
  });

  it("should have a className attribute", () => {
    const renderedComponent = shallow(<Img />);
    expect(renderedComponent.prop("className")).toBeDefined();
  });
});
