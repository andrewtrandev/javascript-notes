import React from 'react'




const Links = () => {
    const linksStyle = {
        margin: "5px"
    }
   return  (
       <>
            <div style={{display: "flex"}}>
                <a style={linksStyle} href="https://reactjs.org/tutorial/tutorial.html">Official Tutorial</a>
                <a style={linksStyle} href="https://github.com/facebook/react">Github Code</a>
                <a style={linksStyle} href="https://en.wikipedia.org/wiki/React_(web_framework)">Wikipedia</a>
            </div>
         
            </>
            )
}

export default Links