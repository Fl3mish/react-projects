export const getAllTodos = () => fetch("http://localhost:5000/todos");

export const addTodos = (body) => {
  return fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};
