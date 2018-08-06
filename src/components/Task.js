import React, {Component} from 'react';
import {Capitalize} from './Capitalize';
import {StatusBtn} from '../misc/ui';

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
            <StatusBtn onClick={this.handleClick} status="todo">
              todo
            </StatusBtn>
            <StatusBtn onClick={this.handleClick} status="doing">
              doing
            </StatusBtn>
            <StatusBtn onClick={this.handleClick} status="done">
              done
            </StatusBtn>
          </div>

        </div>
    );
  }

}
