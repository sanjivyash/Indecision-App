import React from "react";
import Option from "./option";

const Options = (props) => {
  if (props.options.length > 0) {
    return (
      <div className="options">
        <div className="head">
          <p>Here are your options: </p>
          <button onClick={props.removeOptions}>Remove All</button>
        </div>
        <div className="clear"></div>
        <ul>
          {props.options.map((option, ind) => {
            return (
              <Option
                key={ind}
                option={option}
                removeOption={props.removeOption}
              />
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="options">
        <div className="head">
          <p>No options available</p>
        </div>
      </div>
    );
  }
};

export default Options;
