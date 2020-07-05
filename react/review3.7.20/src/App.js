import React, {useState} from 'react'
import Home from './Home'
import About from './About'
import {BrowserRouter, Route, Link} from 'react-router-dom'

const App = () => {

  //routes are used to set our routes and what will render when we go to the specified path


  // we can access ids in props.match.params
    return (
      <div>
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path = "/about/:id" render = {(props)=> <About match={props.match.params.id}/>} /> */}
            <Route exact path="/about/:id" render={(props) => <About id={props.match.params.id}/>} />

            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
        </BrowserRouter>
      </div>
  )
}

export default App 