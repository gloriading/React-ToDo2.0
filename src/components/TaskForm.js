import React, {Component} from 'react';

export default class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = { userInput: "" };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ userInput: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateTodo(this.state.userInput);
  }

  render(){
    return(
        <form className="add-task-form" onSubmit={this.handleSubmit}>
          <input
            className="input-todo"
            type="text"
            onChange={this.handleChange}
           />
          <input
            className="submit-btn"
            type="submit"
            value="Add task" />
        </form>
    );
  }

}
