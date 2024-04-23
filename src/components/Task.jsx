import styles from './Task.module.css'

import { Trash } from 'phosphor-react';

export function Task({content, onDeleteTask, onInputCheck}) {
    function handleDeleteTask(){
        onDeleteTask(content);
    }
    function handleTaskCompleted(){
        if(event.target.checked){
            onInputCheck(true);
        }else{
            onInputCheck(false);
        }
        
    }
    return (
        <li className={styles.task_li}>
            <div>
                <input 
                    type="checkbox" 
                    id="checkbox-1" 
                    onChange={handleTaskCompleted}
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