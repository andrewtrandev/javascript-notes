import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.querySelector("#root"))


/*
https://edstem.org/courses/4124/lessons/3559/slides/26122

Afternoon Challenge
TodoList Item
For today's afternoon challenge, you are tasked with building a TodoList list item (only one list item, not the whole thing).

You are to create a ListItem class component which takes one prop, the "todo" text, has two possible states, complete or incomplete. 

If the list item is incomplete it should display the "todo" text normally, if it's complete the text should be striked out indicating to the user that it's already done. A user can toggle the complete state by clicking on a button which is included in the List item

For inspiration, check out the list items here (http://todomvc.com/examples/react/#/)

BEAST MODE

If you flew threw the previous task, let's start kicking it up a notch. Just like in the Todomvc example linked above, we want to be able to display multiple list items one after another. Create a component called TodoList which is able to render out multiple ListItem. 

TodoList should store, as part of its state, an array of Todos (ex. ["take our garbage", "walk dog", "study JS"]), and should be able to render each todo into it's own ListItem.

BEAST++

Try your hand at implementing a "delete" feature. In other words, the list item should be able to be "removed" from the page when the user clicks the "x" button.*/
