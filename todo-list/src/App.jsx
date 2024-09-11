import { useState } from "react";
import * as TodoServices from "./services/todo";
import { useEffect } from "react";
import TodoItem from "./TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [creating, setCreating] = useState(false);
  const [createText, setCreateText] = useState("");

  const fetchTodos = async () => {
    const response = await TodoServices.getAllTodos();
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const todoItems = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
  ));

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-blue-600 to-green-300">
      <div className="w-full max-w-sm mt-40 bg-zinc-100 rounded-md p-4">
        {todoItems}
        {creating ? (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const newTodo = { task: createText, completed: false };
              // Waiting for confirmation that we have added newTodo to DB
              const response = await TodoServices.addTodos(newTodo);
              // Adding that response to data and turning it into js object
              const data = await response.json();
              // Adding new object to frontend state
              setTodos([...todos, data]);
              // reset input field state
              setCreateText("");
              setCreating(false); // Close form after creating
            }}
            className="flex flex-col"
          >
            <input
              type="text"
              placeholder="enter task"
              value={createText}
              onChange={(e) => setCreateText(e.target.value)}
              className=" bg-white border border-zinc-300 text-blue-500 my-2 rounded-md p-2"
            />
            <button className="bg-sky-500 text-white rounded-md p-2 mt-4">
              save
            </button>
          </form>
        ) : (
          <div className="mt-2">
            <button
              onClick={() => setCreating(true)}
              className="flex justify-center items-center w-full hover:bg-zinc-300 text-zinc-500 rounded-md p-2"
            >
              <i className="fa fa-plus mr-2 text-xl"></i> Add Todo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
