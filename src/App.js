import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      {/* Filtreleme Butonları */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Tümü
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          Tamamlananlar
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className="px-2 py-1 bg-yellow-500 text-white rounded"
        >
          Tamamlanmayanlar
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
