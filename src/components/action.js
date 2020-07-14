import React from "react";

const Action = (props) => {
  return (
    <div className="action">
      <button onClick={props.makeDecision} disabled={!props.choice}>
        What should I choose?
      </button>
    </div>
  );
};

export default Action;
