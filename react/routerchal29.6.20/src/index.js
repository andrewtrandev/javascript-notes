import React from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './App'

ReactDOM.render( <App/>, document.querySelector("#root"))

// https://edstem.org/courses/4124/lessons/3605/slides/26767

/*
Let's start off with the basics, building a website that has multiple pages. Similarly to the in class example build a site that has 3 pages, Home, About and Contact. Each page should be stored in it's and should be mapped to it's appropriate url ("/", "/about", "/contact").

Add in a Header component and a Footer component which are displayed no matter what page you're on.
*/