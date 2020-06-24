import React from 'react'
import ListItem from './ListItem'

const App2 = () => {

    const myListItems = ["take out trash", "walk dog", "brush teeth"]

    return (
       <>
        {myListItems.map(
            todo => <ListItem key={todo} todoText={todo} />)
        }
       </>
    )
}

export default App2
