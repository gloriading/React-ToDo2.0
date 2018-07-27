import React, {Component} from 'react';

export default class Task extends Component {

  render(){
    return(
        <div className="task-container">
          <p><span>{this.props.id} - </span> {this.props.content}</p>
        </div>
    );
  }

}
