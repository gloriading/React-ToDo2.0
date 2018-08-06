import React, {Component} from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import uuid from 'uuid';




export default class ToDoManager extends Component {
  constructor(props){
    super(props);

    this.state={
      allTasks: []
    }

    this.updateTodo = this.updateTodo.bind(this);
    this.changeList = this.changeList.bind(this);
  }

  componentDidMount(){
      this.setState({
        allTasks: [
          {id: uuid.v4(), status: 'todo', content: 'apartment'},
          {id: uuid.v4(), status: 'doing', content: 'doctor'},
          {id: uuid.v4(), status: 'done', content: 'movies'},
          {id: uuid.v4(), status: 'todo', content: 'lunch buffet'},
          {id: uuid.v4(), status: 'done', content: 'morning job'},
          {id: uuid.v4(), status: 'doing', content: 'apple'},
          {id: uuid.v4(), status: 'todo', content: 'banana'},
          {id: uuid.v4(), status: 'doing', content: 'music'}
        ]
      });
  }

  updateTodo(taskReceied){
    let newTaskObj = {
      id: uuid.v4(),
      status: 'todo',
      content: taskReceied
    }
    this.setState({
      allTasks: [...this.state.allTasks, newTaskObj]
    });

  }

  changeList(toBeChangedId,changeTo){
    let allTasks = [...this.state.allTasks];
    let index = allTasks.findIndex( (task) => task.id === toBeChangedId );
    allTasks[index].status = changeTo;
    this.setState({ allTasks });
  }

  render(){
    return(
        <div className="ToDoManager">
          <div className="header">
            <h1>
              <span className="whiteText">React</span> To-Do <span className="whiteText">2.0</span>
            </h1>
          </div>
          <TaskForm updateTodo={this.updateTodo} />
          <TaskList allTodos={this.state.allTasks} handleListChange={this.changeList}/>
        </div>
    );
  }

}
