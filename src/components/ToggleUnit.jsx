import React from 'react';
import '../styles/toggleButton.css';

const ToggleUnit = (props) => {
  return (
    <div className="toggle-unit">
      °C
      <label className="switch">
        <input type="checkbox" onClick={props.onClick} />
        <span className="slider round"></span>
      </label>
      °F
    </div>
  );
};

export default ToggleUnit;