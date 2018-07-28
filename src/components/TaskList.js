import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component {
  constructor(props){
    super(props);
    this.handleListChange = this.handleListChange.bind(this);
  }

  handleListChange(toBeChanged,changeTo){
    this.props.handleListChange(toBeChanged, changeTo);
  }

  render(){
    let todolist, doinglist, donelist;
    todolist = this.props.allTodos
              .filter( obj => obj.status === "todo" )
              .map( obj =>
                     <Task
                        id={obj.id}
                        key={`todokey-${obj.id}`}
                        content={obj.content}
                        status={obj.status}
                        handleListChange={this.handleListChange}
                      />
                );
    doinglist = this.props.allTodos
              .filter( obj => obj.status === "doing" )
              .map( obj =>
                     <Task
                        id={obj.id}
                        key={`doingkey-${obj.id}`}
                        content={obj.content}
                        status={obj.status}
                        handleListChange={this.handleListChange}
                      />
                );
    donelist = this.props.allTodos
              .filter( obj => obj.status === "done" )
              .map( obj =>
                     <Task
                        id={obj.id}
                        key={`donekey-${obj.id}`}
                        content={obj.content}
                        status={obj.status}
                        handleListChange={this.handleListChange}
                      />
                );

    return(
        <div className="task-list">
          <div className="todo">
            <h2>To Do</h2>
            {todolist}
          </div>
          <div className="doing">
            <h2>Doing</h2>
            {doinglist}
          </div>
          <div className="done">
            <h2>Done</h2>
            {donelist}
          </div>

        </div>
    );
  }

}
