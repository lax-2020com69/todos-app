import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p
                onClick={() => toggleComplete(task.id)}
                className={classNames({ completed: task.completed })}
                role="button"
                aria-label={`Mark ${task.completed ? 'incomplete' : 'complete'}: ${task.task}`}
            >
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editTodo(task.id)}
                    aria-label={`Edit task: ${task.task}`}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteTodo(task.id)}
                    aria-label={`Delete task: ${task.task}`}
                />
            </div>
        </div>
    );
};