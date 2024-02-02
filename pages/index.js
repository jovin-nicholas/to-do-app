import Image from "next/image";
import Task from "../Task";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [percentageCompleted, setPercentageCompleted] = useState(0);

  return (
    <div className={raleway.className}>
      <div className="flex flex-row items-center justify-center mb-4">
        <p className="text-xxl">{`${percentageCompleted}% completed`}</p>
        <button onClick={calculatePercentageCompleted}>
          Calculate Percentage
        </button>
      </div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-1/3"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskCompletion={handleTaskCompletion}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}
