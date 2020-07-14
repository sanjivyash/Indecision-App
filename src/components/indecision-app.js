import React from "react";

import Header from "./header";
import Action from "./action";
import Options from "./options";
import AddOption from "./add-option";
import OptionModal from "./option-modal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    modalOption: undefined,
  };

  componentDidMount() {
    try {
      const data = JSON.parse(localStorage.getItem("options"));
      if (data) {
        this.setState(() => ({ options: data }));
      }
    } catch (e) {
      console.log("Loading options failed");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.options.length !== this.state.options) {
        localStorage.setItem("options", JSON.stringify(this.state.options));
      }
    } catch (e) {
      console.log("Saving options failed");
    }
  }

  removeOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  removeOption = (del) => {
    this.setState((prev) => ({
      options: prev.options.filter((option) => option !== del),
    }));
  };

  makeDecision = () => {
    const ind = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ modalOption: this.state.options[ind] }));
  };

  addOption = (option) => {
    // validation of input option
    if (!option) {
      return "Enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Entered option already exists";
    } else {
      this.setState((prev) => ({ options: prev.options.concat(option) }));
    }
  };

  removeModal = () => {
    this.setState(() => ({ modalOption: undefined }));
  };

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Action
          choice={this.state.options.length > 0}
          makeDecision={this.makeDecision}
        />
        <Options
          {...this.state}
          removeOptions={this.removeOptions}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption} />
        <OptionModal
          option={this.state.modalOption}
          removeModal={this.removeModal}
        />
      </div>
    );
  }
}
