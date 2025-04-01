import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const incompleteCount = todos.filter((todo) => !todo.completed).length;

  const addTodo = (task, resetInput) => {
    if (task.trim() === "") return; // Boş veya sadece boşluksa ekleme
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
    resetInput();
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const updateTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4 text-center">To-Do-List</h1>

      {/* Görev Durumu */}
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold">Task Status:</p>
        <p>
          Total: {totalCount} | Completed: {completedCount} | Incomplete:{" "}
          {incompleteCount}
        </p>
      </div>

      {/* Filtreleme Butonları */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Total
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className="px-2 py-1 bg-orange-500 text-white rounded"
        >
          Incomplete
        </button>
      </div>

      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
