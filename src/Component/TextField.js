import React from 'react';

const TextField = ({ label, maxLength, minLength, placeholder, size }) => {
  const styles = {
    input: {
      width: size === 'large' ? '300px' : '150px',
      padding: size === 'large' ? '10px' : '5px',
      fontSize: size === 'large' ? '16px' : '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: size === 'large' ? '16px' : '12px',
    },
  };

  return (
    <div>
      {label && <label style={styles.label}>{label}</label>}
      <input
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        style={styles.input}
      />
    </div>
  );
};

export default TextField;
