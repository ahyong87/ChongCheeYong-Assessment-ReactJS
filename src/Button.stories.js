import React from 'react';
import Button from './Button';
import { FaBeer } from 'react-icons/fa';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'large'] }
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Click Me',
  backgroundColor: 'blue',
  icon: <FaBeer />,
  size: 'large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Submit',
  backgroundColor: 'gray',
  size: 'small',
};
