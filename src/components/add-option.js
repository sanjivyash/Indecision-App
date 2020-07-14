import React from "react";

export default class AddOption extends React.Component {
  state = { error: undefined };

  addOption = (e) => {
    e.preventDefault();
    const input = e.target.option;
    const error = this.props.addOption(input.value.trim());
    this.setState(() => ({ error }));

    if (!error) input.value = "";
    input.focus();
  };

  render() {
    return (
      <div className="add-option">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <input type="submit" value="Add Option" />
        </form>
      </div>
    );
  }
}
