import React, {Component} from 'react';

export default class Task extends Component {

  render(){
    return(
        <div className="task-container">
          <p>{this.props.content}</p>
        </div>
    );
  }

}
