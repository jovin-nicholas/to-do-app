const getAllTodos = async () => {
  const res = await fetch(`http://localhost:3001/todos`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

const addTask = async (newTask) => {
  const task = { id: Date.now().toString(), text: newTask, status: false };
  const response = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  try {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
  console.log(response);

  const addedTask = await response.json();
  return addedTask;
};

const updateTask = async (task) => {
  const response = await fetch(`http://localhost:3001/todos/${task.id}`, { // Add the task ID to the URL
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }

  console.log(response);

  const updatedTask = await response.json();
  return updatedTask;
};

const updateTaskList = async (taskList) => {
  for (let task of taskList) {
    await updateTask(task);
  }
};

const deleteTask = async (id) => {
  const response = await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export { getAllTodos, updateTask, addTask, updateTaskList, deleteTask };

