import React from 'react'

class About extends React.Component {
    render(){
        console.log(this.props);
        
        return (
            <h1>About: {this.props.match.params.id}</h1>
        )
    }
}

export default About