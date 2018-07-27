import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component {

  render(){
    let todolist, doinglist, donelist;
    todolist = this.props.allTodos
              .filter( todoObj => todoObj.status === "todo" )
              .map( todoObj =>
                     <Task
                        id={todoObj.id}
                        key={`todokey-${todoObj.id}`}
                        content={todoObj.content}
                        status={todoObj.status}
                      />
                );
    doinglist = this.props.allTodos
              .filter( doingObj => doingObj.status === "doing" )
              .map( doingObj =>
                     <Task
                        id={doingObj.id}
                        key={`doingkey-${doingObj.id}`}
                        content={doingObj.content}
                        status={doingObj.status}
                      />
                );
    donelist = this.props.allTodos
              .filter( dontObj => dontObj.status === "done" )
              .map( dontObj =>
                     <Task
                        id={dontObj.id}
                        key={`donekey-${dontObj.id}`}
                        content={dontObj.content}
                        status={dontObj.status}
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
