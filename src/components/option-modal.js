import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.option}
      contentLabel={props.option}
      onRequestClose={props.removeModal}
    >
      <h3>Selected Option</h3>
      <p>{props.option}</p>
      <button onClick={props.removeModal}>Ok Boomer</button>
    </Modal>
  );
};

export default OptionModal;
