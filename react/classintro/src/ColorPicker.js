import React from 'react'

class ColorPicker extends React.Component {
    constructor(props){
        super(props)
// allows you to use this.props.propname
        this.state = {
            textColor: 'blue'
        }
    }

    changeTextColor = (color) => {
        this.setState({textColor:color})
    }

    render(){
        const textStyle = {
            color: this.state.textColor
        }


        return (
            <div>
             {this.props.name}
            <ul>
                <li onClick={() => {
                    this.setState({textColor:"red"})
                }}>Red</li>
               <li onClick={() => {
                    this.setState({textColor: "blue"})
                }}>Blue</li>

                <li onClick={() => {
                    this.setState({textColor: "green"})
                }}>Green</li>

                        {/* Method 2 */}

                    <li onClick={() => this.changeTextColor("red")}>Red</li>
                    <li onClick={() => this.changeTextColor("blue")}>Blue</li>
                    <li onClick={() => this.changeTextColor("green")}>Green</li>
            </ul>
            <p style={textStyle }>The colored text</p>
            </div>
        )
        
    }

}

export default ColorPicker
