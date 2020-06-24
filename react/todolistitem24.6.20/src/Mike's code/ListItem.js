import React from 'react'

class ListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isComplete: false
        }
    }

    render(){
        console.log(this.state)
        const style = {
            textDecoration: this.state.isComplete ? "line-through" : "none"
        }
        return (
            <div>
                <span style={style}>{this.props.todoText}</span>
                <button 
                    
                    onClick={() => {
                        this.setState({isComplete: !this.state.isComplete})
                    }}>toggle</button>
            </div>
        )
    }
}

export default ListItem