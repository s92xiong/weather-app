import React from 'react';

const SearchFailed = (props) => (
  <div className="search-failed">
    <h1>{props.header}</h1>
    <br/>
    <p>To specify a country, use the two-letter abbreviation (Alpha-2 code) after a comma. e.g. Washington, US</p>
  </div>
);

export default SearchFailed;