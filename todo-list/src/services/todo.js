export const getAllTodos = () => fetch("http://localhost:5000/todos");

export const addTodos = (body) =>
  fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

export const deleteTodo = (todoId) =>
  fetch(`http://localhost:5000/todos/${todoId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
