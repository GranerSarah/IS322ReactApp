import React from 'react';
import './style.css';

class PageTab extends React.Component{

    isActiveTab(tabName){
        return (tabName===this.props.currentView)?'btn active':'btn';
    }

    onTabClick(event,tabName){
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render(){
        return(
            <ul id='navigation' className='pageTabs'>
                <li className='navOptions' id='taskListButton'>
                    <a className={this.isActiveTab('taskList')} onClick={(e)=>this.onTabClick(e,'taskList')}>
                        Task List
                    </a>
                </li>

                <li className='navOptions' id='addTaskButton'>
                    <a className={this.isActiveTab('addTask')} onClick={(e)=>this.onTabClick(e,'addTask')}>
                        Add Task
                    </a>
                </li>
            </ul>
        )
    }
};

export default PageTab;