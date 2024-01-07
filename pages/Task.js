const Task = ({ task, onTaskCompletion, onDelete }) => {
    const handleCheckboxChange = () => {
      onTaskCompletion(task.id);
    };
  
    return (
      <div className='flex flex-row items-center justify-start'>
        <input
          type="checkbox"
          checked={task.status}
          onChange={handleCheckboxChange}
          className='mr-2 text-xxl'
        />
        <p className={`${task.status ? 'line-through' : ''}`}>{task.text}</p>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default Task;
  