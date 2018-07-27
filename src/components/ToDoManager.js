import React, {Component} from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default class ToDoManager extends Component {
  constructor(props){
    super(props);
    this.state={
      allTasks: [
        {id: 1, status: 'todo', content: 'apartment'},
        {id: 2, status: 'doing', content: 'doctor'},
        {id: 3, status: 'done', content: 'movies'},
        {id: 4, status: 'todo', content: 'lunch buffet'},
        {id: 5, status: 'done', content: 'morning job'},
        {id: 6, status: 'doing', content: 'apple'},
        {id: 7, status: 'todo', content: 'banana'},
        {id: 8, status: 'doing', content: 'music'}
      ],
      currentId: lastId
    }

    let lastIndex = this.state.allTasks.length - 1;
    let lastId = this.state.allTasks[lastIndex].id;
    console.log(lastId);
  }
  render(){
    return(
        <div className="ToDoManager">
          ToDoManager
          <TaskForm />
          <TaskList allTodos={this.state.allTasks} />
        </div>
    );
  }

}
