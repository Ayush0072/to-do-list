
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, onDelete, onComplete, onEdit }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks to display</p>
      )}
    </div>
  );
}

export default ToDoList;
