import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import './task.css'
import {useHistory} from 'react-router-dom'


const Task = ({task, handleTaskDeletion, handleTaskClick}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    return (
    <div 
    className='task-container' 
    style={task.completed ? {borderLeft: "6px solid  chartreuse"} : {}} >
         <div className='task-title' onClick={() => handleTaskClick(task.id)}>
        {task.title}
        </div>
        <div className="buttons-container">
        <button className='see-tasks-details-button' onClick={handleTaskDetailsClick}>
            <CgInfo />
            </button>
            <button className='remove-tasks-button' onClick={() => handleTaskDeletion(task.id)}>
            <CgClose />
            </button>
            
        </div>
    </div>
    )
}
 
export default Task;