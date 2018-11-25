import React from 'react';
import App from "./App";

test('Render a main', () => {
    const wrapper = shallow(
        <App>Hello Jest!</App>
    );
    expect(wrapper).toMatchSnapshot();
});
