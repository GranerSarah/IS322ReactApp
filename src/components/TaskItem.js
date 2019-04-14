import React from 'react';
import './style.css';

const TaskItem = props => {
  return (
      <li className="list-group-item">
          <button type="button"
                  onClick={() => props.unDone(props.task)}
                  className="btn btn-primary" style={{ float: 'left' }}>
              Undo
          </button>
        { props.task.title }
        <button type="button"
                onClick={() => props.markDone(props.task)}
                className="btn btn-primary" style={{ float: 'right' }}>
          Done
        </button>
      </li>
  )
};

export default TaskItem;