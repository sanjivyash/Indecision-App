class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prev) => {
      return { visible: !prev.visible };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visible ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visible && <p>{this.props.content}</p>}
      </div>
    );
  }
}

const props = {
  title: "Visibility Toggle",
  content: "These are some details you can now see",
};

ReactDOM.render(
  <VisibilityToggle {...props} />,
  document.getElementById("message")
);
