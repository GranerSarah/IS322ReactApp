import React from 'react';

import TaskItem from './TaskItem';

class MobileView extends React.Component {
    todoTasks = [];
    progressTasks = [];
    reviewTasks = [];
    doneTasks = [];

    sortTasks=()=>{
        let taskItems=this.props.tasks;

        taskItems.forEach(task=>{
            switch(task.column){
                default:
                    this.todoTasks.push(task);
                    break;

                case 'in-progress':
                    this.progressTasks.push(task);
                    break;

                case 'review':
                    this.reviewTasks.push(task);
                    break;

                case 'done':
                    this.doneTasks.push(task);
                    break;
            }
        })

        console.log(this.todoTasks.length);
        console.log(this.progressTasks.length);
        console.log(this.reviewTasks.length);
        console.log(this.doneTasks.length);
    };



    render(){

        switch(this.props.value){
            default:
                const todoItems = this.todoTasks.map(task => {
                    return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
                });

                return(
                <article id="ToDos" className="boards">
                    <h2>To Do</h2>
                    <ul className="task-list list-group">
                        {todoItems}
                    </ul>
                </article>
                );

            case 'in-progress':
                const progressItems=this.progressTasks.map(task=>{
                    return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
                });

                return(
                <article id="Progresses" className="boards">
                    <h2>In Progress</h2>
                    <ul className="task-list list-group">
                        {progressItems}
                    </ul>
                </article>
                );

            case 'review':
                const reviewItems=this.reviewTasks.map(task=>{
                    return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
                });

                return(
                <article id="Reviews" className="boards">
                    <h2>Review</h2>
                    <ul className="task-list list-group">
                        {reviewItems}
                    </ul>
                </article>
                );

            case 'done':
                const doneItems=this.doneTasks.map(task=>{
                    return <TaskItem task={task} key={task.id} markDone={this.markDone} unDone={this.unDone}/>
                });

                return(
                <article id="Dones" className="boards">
                    <h2>Done</h2>
                    <ul className="task-list list-group">
                        {doneItems}
                    </ul>
                </article>
                );
        }
    }
}

export default MobileView;