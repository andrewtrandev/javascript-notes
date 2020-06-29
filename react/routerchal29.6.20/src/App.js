import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
      <h1>A great header</h1>
      <hr / >
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact} />

        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </BrowserRouter>
      <hr / >
      <h1>An even better footer</h1>
      </>
    );
  }
}

export default App;
