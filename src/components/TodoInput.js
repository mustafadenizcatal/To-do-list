//Kullanıcının yeni görev eklemesine olanak tanıyan bir form bileşeni
import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTodo(task, () => setTask("")); // Görev ekledikten sonra input temizleniyor
  };

  return (
    <div className="flex gap-2 mb-4 justify-center">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border rounded"
        placeholder="Add new task..."
      />
      <button
        onClick={handleAdd}
        className="px-2 py-1 bg-purple-500 text-white rounded"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
