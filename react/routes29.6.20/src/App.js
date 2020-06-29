
import React, { Component } from "react";
import Pokemon from "./Pokemon";
import {BrowserRouter, Route, Link} from "react-router-dom"
import Home from './Home'
class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/pokemon/:pokemonName" component={Pokemon} />
                </BrowserRouter>
            </div>
        );
    };
};

export default App;







//////////////////////////////////////////////////

// import React, { Component } from "react";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
// import { BrowserRouter, Route, Link } from "react-router-dom";

// //browserrouter spec for browsers
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/about/:id" component={About} />
//           <Link to="/">
//             <button>Home</button>
//           </Link>
//           <Link to="/contact">
//             <button>Contact</button>
//           </Link>
//           <Link to="/about/3">
//             <button>About</button>
//           </Link>
//         </BrowserRouter>

//         <a href="/">Home</a>
//         <a href="/about/3">About</a>
//         <a href="/contact">Contact</a>
//       </div>
//     );
//   }
// }

// export default App;

//////////////////////////////////////////

// Older way to create single page apps
// a way for us to create routing
// window.location

// class App extends Component {
//   state = {
//     location: "about",
//   };

//   getView() {
//     switch (this.state.location) {
//       case "/home":
//         return <Home />;
//       case "/contact":
//         return <Contact />;
//       case "/about":
//         return <About />;
//       default:
//         return null;
//     }
//   }

//   componentDidMount() {
//     this.setState({ location: window.location.pathname });
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Site Header</h1>
//         <hr />
//         {this.getView()}
//         <button onClick={() => this.setState({ location: "/home" })}>
//           Home
//         </button>
//         <button onClick={() => this.setState({ location: "/about" })}>
//           About
//         </button>
//         <button onClick={() => this.setState({ location: "/contact" })}>
//           Contact
//         </button>
//         <hr />
//         <div>My site footer</div>
//       </div>
//     );
//   }
// }

// export default App;
