import './global.css'
import styles from './App.module.css'
import { Header } from "./components/Header"
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <main className={styles.main}>
          <NewTask/>
          <TaskList/>
        </main>
      </div>
    </div>
  )
}

export default App
