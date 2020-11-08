import React from 'react';
import SearchCity from './SearchCity';
import ToggleUnit from './ToggleUnit';
// import odinImage from '../images/odin-img.png/';
import image from '../images/open-weather.png';

const Navbar = (props) => {
  return (
    <nav>
      <a href="https://openweathermap.org/">
        <img src={image} alt=""/>
      </a>
      <SearchCity onSubmit={props.onSubmit} onChange={props.onChange} className="input-city" />
      <ToggleUnit onClick={props.onClick} />
    </nav>
  );
};

export default Navbar;