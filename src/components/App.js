import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import AddTask from './AddTask';
import PageTab from './PageTab';

class App extends React.Component {

  //set initial state
  state = {
    tasks: [],
    errorMessage: '',
    view:'taskList'
  }


  componentDidMount() {
    this.getData();
  }

  //json server set up
  getData() {
    axios.get('https://my-json-server.typicode.com/krutimistry/IS322-JSON/posts')
        .then(response => {
          this.setState({tasks: response.data});
        }).catch(error => {
      this.setState({errorMessage: error.message});
    });
  }

  //conditional rendering
  onViewChange(view){
    this.setState({view});
  }

  wrapPage(jsx){
    const{view}=this.state;
    return(
        <div className="container">
          <PageTab currentView={view} onViewChange={this.onViewChange.bind(this)} />
          {jsx}
        </div>
    );
  }

  //add task method
  onAddTask = (taskName) => {
    let tasks = this.state.tasks;
    tasks.push({
      title: taskName,
      id: this.state.tasks.length + 1,
      type: 'task',
      column: 'todo'
    });

    this.setState({tasks});
  }

  //re-render when task list is updated
  onUpdateTaskList = (newTaskList) => {
    this.setState({tasks: newTaskList});
  }


  render() {
    const {view}=this.state;

        switch(view){
          case 'taskList':
            return(this.wrapPage(
                <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
            ));

          case 'addTask':
            return(this.wrapPage(
                <AddTask onSubmit={this.onAddTask}/>
            ));

          default:
            return(this.wrapPage(
                <p>Oh no! How did you get <em>here?</em> This tab doesn't even exist!</p>
            ));
        }
  }
}

export default App;