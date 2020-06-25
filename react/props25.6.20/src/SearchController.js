import React from 'react'
import Search from './Search'
import Button from './Button'
//smart components, rendering other components and have state
class SearchController extends React.Component {

    state = {
        searchValue: ""
    }

    // creating a function that we'll pass down into Search component
    handleSubmit = () => {
        console.log("Submit: ", this.state.searchValue)
    }


    render(){
        return (
            <>
            <Search 
            // props that we'll pass to Search
                searchValue={this.state.searchValue}
               // defining another prop which is a function that gets passed to Search
                onSearchValueChange={(newSearchValue) => {
                    this.setState({searchValue: newSearchValue})
                }}
                onEnter={this.handleSubmit}
            />
            <Button onSubmit={() => {
                console.log("submitting", this.state.searchValue)}} />
            </>
        )
    }
}

export default SearchController