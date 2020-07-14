import React from "react";

const Option = (props) => {
  return (
    <div className="option">
      <li>
        <p>{props.option}</p>
        <a onClick={(e) => props.removeOption(props.option)}>
          <i className="fas fa-trash-alt"></i>
        </a>
      </li>
    </div>
  );
};

export default Option;
