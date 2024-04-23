import styles from "./PostTask.module.css"
import { PlusCircle } from "phosphor-react"

import { useState } from "react"

import { Task } from "./Task";

import clipBoardSvg from "../assets/clipboard.svg"

export function PostTask() {

    const [taskCount, setTaskCount] = useState(1);
    const [taskCountCompleted, setTaskCountcompleted] = useState(0);

    const [newTaskText, setNewTaskText] = useState('');

    const [tasks, setTasks] = useState([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem nesciunt officia maiores doloribus amet laudantium voluptatum suscipit reprehenderit voluptate cum deleniti, nisi vero nobis. Ratione doloremque aperiam dolore veniam!'
    ]);

    function autoTaskCount(control){
       
            setTaskCount((state)=>{
                if(control){
                    return state + 1;
                }else if(state > 0){
                    return state - 1;
                }
            });
        
        
    }

    function autoTaskCountCompleted(stateCheck){
        setTaskCountcompleted((state)=>{
           if (stateCheck){
            return state + 1 ;
           }else{
            return state - 1 ;
           }
        });
        

    }

    function handleCreateNewTaskText() {
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');

        autoTaskCount(true);
    }

    function handleNewTaskTextChange() {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function deleteTask(taskToDelete,completed) {
        const tasksOneDeleted = tasks.filter(task => {
            return task != taskToDelete;
        })
       
        setTasks(tasksOneDeleted);
        autoTaskCount(false);
        if(completed){
            autoTaskCountCompleted(false);
           }
    }

    return (
        <section className={styles.section}>
            <div className={styles.div}>
                <form onSubmit={handleCreateNewTaskText} className={styles.form}>
                    <textarea
                        name="task"
                        placeholder="Adicione uma tarefa"
                        value={newTaskText}
                        onChange={handleNewTaskTextChange}
                        required
                    >
                        {newTaskText}
                    </textarea>

                    <button type="submit" >Criar <PlusCircle size={23} /></button>
                </form>
                <header className={styles.header}>
                    <p>Tarefas criadas <span>{taskCount}</span></p>
                    <p>Concluídas <span> {taskCountCompleted} de {taskCount}</span></p>
                </header>


                    {
                        (() => {
                            if (tasks.length > 0) {
                                return tasks.map((task,index) => (
                                    <Task
                                        key={index}
                                        content={task}
                                        onDeleteTask={deleteTask}
                                        onInputCheck={autoTaskCountCompleted}
                                    />
                                ));
                            } else {
                                return (
                                    <div className={styles.taskList}>
                                        <img src={clipBoardSvg} alt="imagem-clipboard" />
                                        <p><strong>Você ainda não tem tarefas cadastradas</strong><br/>Crie tarefas e organize seus itens a fazer</p>
                                    </div>
                                );
                            }
                        })()
                    }


            </div>

        </section>



    )
}