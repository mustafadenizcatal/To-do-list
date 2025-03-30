//Kullanıcının yeni görev eklemesine olanak tanıyan bir form bileşeni
import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Yeni görev ekle..."
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Ekle
      </button>
    </form>
  );
}

export default TodoInput;
