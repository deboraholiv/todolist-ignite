import styles from './Task.module.css'
import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'

interface TasksProps {
  content: string
  id: number
  onDeleteTask: (id: number) => void 
  completeTask: (taskChecked: number | boolean) => void
}

export function Task(props: TasksProps) {

  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange() {
    setIsChecked(!isChecked)
    props.completeTask(!isChecked)
  }
  
  function handleDeleteTask() {
    props.onDeleteTask(props.id)
  }

  return(
    <div className={styles.taskList} >
      <div className={styles.task}>
        <label className={styles.checkbox}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
          <span>
            {props.content}
          </span> 
          {isChecked ? <div className={styles.checked}><Check size={12} weight="bold" color="var(--gray-100)" data-type="svg"/></div> : <div className={styles.check}></div>}
        </label>
        <Trash onClick={handleDeleteTask} className={styles.trashIcon} size={24}/>
      </div>
    </div>
  )
}