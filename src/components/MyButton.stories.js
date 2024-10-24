import React from 'react';
import MyButton from './MyButton';

export default {
    title: 'Example/MyButton',
    component: MyButton,
    parameters: {
        docs: {
            description: {
                component: 'This is a button component that can be customized with props.',
            },
        },
    },
    tags: ['autodocs'],
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Click Me',
    onClick: () => alert('Button clicked!'),
};

// Add a documentation section
Primary.parameters = {
    docs: {
        storyDescription: 'This button is used to trigger actions.',
    },
};
