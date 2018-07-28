import React, {Component} from 'react';
import {Capitalize} from './Capitalize';

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
    let taskContent = Capitalize(this.props.content);

    return(
        <div className="task-container">
          <p>{taskContent}</p>
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
