import React, { useState } from "react";

function TodoList({ todos, toggleComplete, deleteTodo, updateTodo }) {
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTask(todo.task);
  };

  const handleUpdate = (id) => {
    updateTodo(id, editTask);
    setEditId(null);
    setEditTask("");
  };

  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex justify-between items-center p-2 mb-2 rounded ${
            todo.completed ? "bg-green-200" : "bg-gray-100"
          }`}
        >
          {editId === todo.id ? (
            <input
              type="text"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              className="flex-1 p-1 mr-2 border rounded editing"
            />
          ) : (
            <span
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.task}
            </span>
          )}
          {editId === todo.id ? (
            <>
              <button
                onClick={() => handleUpdate(todo.id)}
                className="px-2 py-1 text-white bg-blue-500 rounded ml-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                className="px-2 py-1 text-white bg-gray-500 rounded ml-2"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleEdit(todo)}
                className="px-2 py-1 text-white bg-yellow-500 rounded ml-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-2 py-1 text-white bg-red-500 rounded ml-2"
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
