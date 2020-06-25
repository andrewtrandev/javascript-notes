import React from 'react'

/*
first we receive props from SearchController
create an input element
define value as equal props.searchValue
onChange, returns a synthetic event object, which contains useful metadata
so we grab this event and use it in our function "props.onSearchValueChange" passed down from our parent and target event.target.value
we pass in event.target.value which we grab from the input field and use it in the onSearchValueChange function that's 
been passed down from the SearchController.

In this instance props.onSearchValueChange is a callback function because it's been passed into onChange and called from there.
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

https://upmostly.com/tutorials/react-onchange-events-with-examples
*/
const  Search = (props) => {
   
        return (
        <>
        
          <input
            type="text"
            value={props.searchValue}
            onChange={(event) => {
                
                props.onSearchValueChange(event.target.value)
                }}
                // below, we can make it so that when enter is pressed it uses the prop function from searchcontroller to submit the search
            onKeyUp={(event) => {
                if(event.keyCode === 13){
                    props.onEnter()
                }
            }}     
                /> 
             
        </>
        )
    
}
// dumb component
// receives props, doesn't do any data manipulation

export default Search