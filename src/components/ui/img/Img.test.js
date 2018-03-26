import React from 'react';
test('Render a img', () => {
    const wrapper = shallow(
        <img>Hello Jest!</img>
    );
    expect(wrapper).toMatchSnapshot();
});
