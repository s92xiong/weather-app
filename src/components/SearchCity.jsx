import React from 'react';

const SearchCity = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input 
        type="text"
        placeholder="Search City"
        onChange={props.onChange}
        className={props.className}
      />
    </form>
  );
}; 

export default SearchCity;