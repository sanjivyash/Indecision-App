import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};

Header.defaultProps = { title: "Indecision App" };
export default Header;
