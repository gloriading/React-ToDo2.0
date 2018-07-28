import React, {Component} from 'react';

export default class Task extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let changeTo = e.target.getAttribute('id');
    this.props.handleListChange(this.props.id, changeTo);
  }

  render(){

    return(
        <div className="task-container">
          <p>{this.props.content}</p>
          <div className="task-status-container">
            <span
              className="status-btn"
              onClick={this.handleClick}
              id="todo"
              >
              todo
            </span>
            <span
              className="status-btn"
              onClick={this.handleClick}
              id="doing"
              >
              doing
            </span>
            <span
              className="status-btn"
              onClick={this.handleClick}
              id="done"
              >
              done
            </span>
          </div>

        </div>
    );
  }

}
