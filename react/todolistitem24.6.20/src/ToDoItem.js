import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      strikethrough: "",
    };
  }

  changeStatus = (status) => {
    if (status) {
      this.setState({ completed: false,
        strikethrough:"" 
    })
    } else {
      this.setState({ completed: true,
        strikethrough: "line-through"
     })
    }
  };

  render() {
    const liStyle = {
      listStyleType: "none",
      textDecoration: this.state.strikethrough,
    };
    console.log(this.state.completed);
    return (
      <ul>
        <li style={liStyle}>
          <button onClick={() => this.changeStatus(this.state.completed)}>
            0
          </button>
          {this.props.todotext}
        </li>
      </ul>
    );
  }
}

export default ToDoItem;
