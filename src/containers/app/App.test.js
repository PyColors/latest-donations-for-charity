import React from 'react';
test('Render a main', () => {
    const wrapper = shallow(
        <main>Hello Jest!</main>
    );
    expect(wrapper).toMatchSnapshot();
});
