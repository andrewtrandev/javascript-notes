import React from 'react'
import ViewBooks from './ViewBooks'
import ViewBook from './ViewBook'
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {

    return (
        <div>
            <h1>Bookify</h1>
            


            <BrowserRouter>
                <Route exact path="/" component={ViewBooks} />
                <Route exact path="/:id" render={props => <ViewBook bookId = {props.match.params.id}/>} />
            </BrowserRouter>
       
            {/* <ViewBooks />
            <ViewBook bookId = "2" /> */}
        </div>
    )
}

export default App