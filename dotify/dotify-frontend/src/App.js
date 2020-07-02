import React from 'react'
import ViewSongs from './ViewSongs'
import ViewSong from './ViewSong'
import {BrowserRouter, Route} from 'react-router-dom'
import DeleteSong from './DeleteSong'

const App = () => {
    return (
        <div>
        App
        <BrowserRouter>
                <Route exact path="/songs" component={ViewSongs} />
                <Route exact path="/songs/:id" render={props => <ViewSong songId={props.match.params.id}/>} />
        </BrowserRouter>
        <DeleteSong 
                songId="2"
                onDelete={() => console.log("Deleted Successfully")}
            />



        {/* <ViewSongs /> */}
        {/* <ViewSong songId="1"/>
        <ViewSong songId="2"/>
        <ViewSong songId="3"/> */}
        </div>
    )
}

export default App