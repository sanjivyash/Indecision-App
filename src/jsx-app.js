console.log("Script Loaded into the file!!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const createOption = (e) => {
  e.preventDefault();
  const input = e.target.option;

  if (input.value) {
    app.options.push(input.value);
    input.value = "";
    renderTemplate();
  }
};

const removeOptions = (e) => {
  app.options = [];
  renderTemplate();
};

const makeDecision = (e) => {
  const rand = Math.floor(Math.random() * app.options.length);
  alert(app.options[rand]);
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button onClick={removeOptions}>Remove All</button>
      <button onClick={makeDecision} disabled={!app.options.length}>
        What should I do?
      </button>
      <p>{app.options ? "Here are your options:" : "No options provided"}</p>
      <ul>
        {app.options.map((option, ind) => (
          <li key={ind}>{option}</li>
        ))}
      </ul>
      <form onSubmit={createOption}>
        <input type="text" name="option" placeholder="Add Option" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById("message"));
};

renderTemplate();
