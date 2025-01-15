

import React from 'react';

function ToDoItem({ task, onDelete, onComplete, onEdit }) {
  return (
    <div className="todo-item">
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <div>
        <button className="complete" onClick={() => onComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="edit" onClick={() => onEdit(task.id)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
