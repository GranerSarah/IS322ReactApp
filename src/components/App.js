import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import AddTask from './AddTask';
import PageTab from './PageTab';
import MobileView from "./MobileView";

const MOBILE_BREAKPOINT=500;

class App extends React.Component {

  //set initial state
  state = {
    tasks: [],
    errorMessage: '',
    view:'taskList',
    browserWidth:0,
    breakpoint:'mobile',
    mobileView:'todo'
  }


  componentDidMount() {
    this.getData();
    window.addEventListener('resize',this.handleResize);
    this.handleResize();
  }

  handleResize=()=>{
    const browserWidth=window.innerWidth;
    let breakpoint='desktop';

    if (browserWidth<MOBILE_BREAKPOINT){
      breakpoint='mobile';
    }

    this.setState({breakpoint:breakpoint,browserWidth});
  };


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

  handleChange=()=>{

  }


  render() {
    const {view}=this.state;

        switch(view){
          case 'taskList':
            if(this.state.breakpoint==='desktop') {
              return (this.wrapPage(
                  <section id="taskboard">
                  <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
                  </section>
              ));
            }else{
              return(this.wrapPage(
                  <section id="taskboard">
                    <form onChange={(e) => this.setState({ mobileView: e.target.value })}>
                      <select name="board">
                        <option value="todo" default>To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                      </select>
                    </form>
                    <MobileView tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} value={this.state.mobileView}/>
                  </section>

              ))
            }

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