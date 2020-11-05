import React from 'react';

const Input = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input 
        type="text"
        placeholder="Enter a city..."
        onChange={props.onChange}
        className={props.className}
      />
    </form>
  );
}; 

export default Input;