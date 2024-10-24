import React from 'react';
import MyButton from './MyButton';

export default {
    title: 'Example/MyButton',
    component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Click Me',
    onClick: () => alert('Button clicked!'),
};
