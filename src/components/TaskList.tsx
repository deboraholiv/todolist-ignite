import styles from './TaskList.module.css'
import { Check, Trash } from 'phosphor-react'


export function TaskList() {
  return(
   <div>
    <header className={styles.container}>
      <p>Tarefas criadas<span>0</span></p>
      <p>Concluídas<span>0</span></p>
    </header>

    <div className={styles.taskList}>
      <div className={styles.task}>
        <label className={styles.checkbox}>
          {/* <Check className={styles.checked} size={10} color="var(--gray-100)" data-type="svg"/> */}
          <input type="checkbox"/>
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer
          </span>
        </label>
        <Trash className={styles.trashIcon} size={24}/>
      </div>

      <div className={styles.task}>
        <label className={styles.checkbox}>
          {/* <Check className={styles.checked} size={10} color="var(--gray-100)" data-type="svg"/> */}
          <input type="checkbox"/>
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer Duis vel sed fames integer
          </span>
        </label>
        <Trash className={styles.trashIcon} size={24}/>
      </div>

      <div className={styles.task}>
        <label className={styles.checkbox}>
          {/* <Check className={styles.checked} size={10} color="var(--gray-100)" data-type="svg"/> */}
          <input type="checkbox"/>
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer
          </span>
        </label>
        <Trash className={styles.trashIcon} size={24}/>
      </div>
    </div>

   </div>
  )
}