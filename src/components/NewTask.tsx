import styles from './NewTask.module.css'
import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { NoTask } from './NoTask'

interface Task {
  id: number
  content: string
}

export function NewTask() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskValue, setNewTaskValue] = useState('')
  const [checkedCount, setCheckedCount] = useState(0)

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask = {
      id: Math.floor(Math.random() * 999999 + 1),
      content: newTaskValue
    }
    setTasks([...tasks, newTask])
    setNewTaskValue('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTaskValue(event.target.value)
  }

  function deleteTask(taskToDelete: number){
    const taskWithoutDeleteOne = tasks.filter(task=>{
      return task.id !== taskToDelete
    })
    setTasks(taskWithoutDeleteOne)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function completeTask(taskChecked: number | boolean) {
    if(taskChecked) {
      setCheckedCount(checkedCount + 1)
    } else {
      setCheckedCount(checkedCount - 1)
    }
  }

  return(
    <>
      <form className={styles.newTask} onSubmit={handleAddNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          name='task'
          value={newTaskValue}
          onChange={handleNewTaskChange}
          required
          onInvalid={handleNewTaskInvalid}
        />
        <button type='submit'>
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>

      <section className={styles.containerCount}>
        <p>Tarefas criadas<span>{tasks.length}</span></p>
        <p>Concluídas
          {tasks.length === 0 ? <span>{tasks.length}</span> : <span>{checkedCount} de {tasks.length}</span>}
        </p>
      </section>
      {tasks.length === 0 ? <NoTask/> : <section className={styles.taskList}> {tasks.map(task => {
          return <Task key={task.id} id={task.id} content={task.content} onDeleteTask={deleteTask} completeTask={completeTask}/>
        })}</section>}
    </>
  )
}