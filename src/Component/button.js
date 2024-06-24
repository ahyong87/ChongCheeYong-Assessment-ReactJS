import React from 'react';

const Button = ({ title, backgroundColor, icon, size }) => {
  const styles = {
    backgroundColor,
    padding: size === 'large' ? '10px 20px' : '5px 10px',
    fontSize: size === 'large' ? '16px' : '12px',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={styles}>
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
