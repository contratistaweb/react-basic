import React from "react";
import "./TodoSearch.css";
function TodoSearch(props) {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    props.setSearchValue(e.target.value)
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={props.searchValue}
      onChange={onSearchValueChange}
    />
  )
}
export { TodoSearch };
