import logo from "./logo.svg";
import "./App.css";

function feature1() {
  const onChnage = () => {
    console.log("onClick");
  };
  const Item = (props) => {
    console.log("Props", props);
    return <h1>{props.name}</h1>;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> azmeer.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Item name={"item1"} isVisible={true} />
        <Item name={"item2"} />
      </header>
    </div>
  );
}

export default feature1;
