//Tüm görevleri listeleyen bileşen
//İçinde her bir görevi göstermek için TodoItem bileşeni kullanacak.
import React from "react";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex justify-between items-center p-2 mb-2 rounded ${
            todo.completed ? "bg-green-200" : "bg-gray-100"
          }`}
        >
          <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.task}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-2 py-1 text-white bg-red-500 rounded ml-2"
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
