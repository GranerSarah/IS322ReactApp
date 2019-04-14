import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let currCol=this.task.column;

    switch (currCol){

      case 'todo':
        this.task.column='in-progress';

      case 'in-progress':
        this.task.column='review';

      case 'review':
        this.task.column='done';

      default:
        this.task.column='done';
    }

    let taskList = this.props.tasks;
    taskList.splice(taskIndex, 1);
    this.props.onUpdateTaskList(taskList);
  }

  unDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let currCol=this.task.column;

    switch (currCol){

      case 'done':
        this.task.column='review';

      case 'in-progress':
        this.task.column='todo';

      case 'review':
        this.task.column='in-progress';

      default:
        this.task.column='todo';
    }

    let taskList = this.props.tasks;
    taskList.splice(taskIndex, 1);
    this.props.onUpdateTaskList(taskList);
  }


  render() {
    const todoList=this.props.tasks.map(
        task=>{
          if(task.column==='todo'){
            return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>}
        }
    );

    const progressList=this.props.tasks.map(
        task=>{
          if(task.column==='in-progress'){
            return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>}
        }
    );

    const reviewList=this.props.tasks.map(
        task=>{
          if(task.column==='review'){
            return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>}
        }
    );

    const doneList=this.props.tasks.map(
        task=>{
          if(task.column==='done'){
            return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>}
        }
    );

    return(
        <section id="taskboard">
          <article id="ToDos" className="boards">
            <h2>To Do</h2>
            <ul className="task-list list-group">
              {todoList}
            </ul>
          </article>
          <article id="Progressives" className="boards">
            <h2>In Progress</h2>
            <ul className="task-list list-group">
              {progressList}
            </ul>
          </article>
          <article id="Reviews" className="boards">
            <h2>Review</h2>
            <ul className="task-list list-group">
              {reviewList}
            </ul>
          </article>
          <article id="Dones" className="boards">
            <h2>Done</h2>
            <ul className="task-list list-group">
              {doneList}
            </ul>
          </article>
        </section>
    );
  }
}

export default TaskList;