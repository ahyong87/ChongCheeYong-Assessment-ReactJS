import React from 'react';
import TextField from './Component/TextField';

export default {
  title: 'Example/TextField',
  component: TextField,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'large'] }
    },
  },
};

const Template = (args) => <TextField {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: 'Username',
  maxLength: 20,
  minLength: 5,
  placeholder: 'Enter your username',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Password',
  maxLength: 15,
  minLength: 8,
  placeholder: 'Enter your password',
  size: 'small',
};
