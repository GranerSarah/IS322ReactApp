import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        let currCol=task.column;

        if(currCol==='todo'){
            task.column="in-progress";
        }else if(currCol==='in-progress'){
            task.column="review";
        }else if(currCol==='review'){
            task.column="done";
        }
        this.props.onUpdateTaskList(taskList);
    }

    unDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        let currCol=task.column;

        if(currCol==='review'){
            task.column="in-progress";
        }else if(currCol==='done'){
            task.column="review";
        }else if(currCol==='in-progress'){
            task.column="todo";
        }
        this.props.onUpdateTaskList(taskList);
    }


  render() {
      const todoItems = this.props.tasks.map(task => {
          if(task.column=='todo') {
              return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
          }
      });

      const progressItems = this.props.tasks.map(task => {
          if(task.column=='in-progress') {
              return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
          }
      });

      const reviewItems = this.props.tasks.map(task => {
          if(task.column=='review') {
              return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
          }
      });

      const doneItems = this.props.tasks.map(task => {
          if(task.column=='done') {
              return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
          }
      });

    return(
        <section id="taskboard">
          <article id="ToDos" className="boards">
            <h2>To Do</h2>
            <ul className="task-list list-group">
              {todoItems}
            </ul>
          </article>
            <article id="Progresses" className="boards">
                <h2>In Progress</h2>
                <ul className="task-list list-group">
                    {progressItems}
                </ul>
            </article>
            <article id="Reviews" className="boards">
                <h2>Review</h2>
                <ul className="task-list list-group">
                    {reviewItems}
                </ul>
            </article>
            <article id="Dones" className="boards">
                <h2>Done</h2>
                <ul className="task-list list-group">
                    {doneItems}
                </ul>
            </article>
        </section>
    );
  }
}

export default TaskList;