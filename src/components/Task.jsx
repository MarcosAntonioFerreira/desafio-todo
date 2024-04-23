import { useState } from 'react';
import styles from './Task.module.css'

import { Trash } from 'phosphor-react';

export function Task({content, onDeleteTask, onInputCheck}) {
    const [completed, setCompleted] = useState('');

    function handleDeleteTask(){
        onDeleteTask(content);
        if (completed === true) {
            onInputCheck(false);
        }
    }
    function handleTaskCompleted(){
        const isChecked = event.target.checked;
        if(isChecked){
            onInputCheck(true);
            
        }else{
            onInputCheck(false);
            
        }
        setCompleted(isChecked);
        
    }

    

    return (
        <li className={styles.task_li}>
            <div>
                <input 
                    type="checkbox" 
                    id="checkbox-1" 
                    onClick={handleTaskCompleted}
                    />
                <p>
                    {content}
                </p>
                <button 
                    title="Deletar tarefa"
                    onClick={handleDeleteTask}
                >
                    <Trash size={24} />
                </button>
            </div>
        </li>
    )
}