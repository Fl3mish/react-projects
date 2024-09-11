import { useState } from "react";
import * as TodoServices from "./services/todo";
import clsx from "clsx";
const TodoItem = (props) => {
  const { todo, fetchTodos } = props;
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  return (
    <div className="bg-white border border-zinc-300 my-2 rounded-md p-2  hover:border-purple-500">
      <div className="text-zinc-600 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <i
            onClick={async () => {
              const newTodo = { complete: !todo.complete };
              await TodoServices.editTodo(todo.id, newTodo);
              fetchTodos();
            }}
            className={clsx(
              "text-green-600 text-xl mr-2 fa-regular cursor-pointer hover:text-purple-700",
              todo.complete ? "fa-check-circle " : "fa-circle"
            )}
          ></i>
          {editing ? (
            <form
              onSubmit={async () => {
                const newTodo = { task: editText };
                await TodoServices.editTodo(todo.id, newTodo);
                await fetchTodos();
                setEditing(false);
              }}
              className="flex flex-1 justify-between"
            >
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 border border-zinc-200 text-blue-500 rounded-md px-2"
              />
              <button className="bg-sky-500 text-white py-1 px-3 rounded-md ml-2">
                save
              </button>
            </form>
          ) : (
            <div>{todo.task}</div>
          )}
        </div>
        {!editing && (
          <div>
            {/* EDIT */}
            <button onClick={() => setEditing(true)} className="mr-1">
              <i className="fa-solid fa-pen text-zinc-300 hover:text-blue-500 active:text-blue-500"></i>
            </button>
            {/* DELETE */}
            <button
              onClick={async () => {
                await TodoServices.deleteTodo(todo.id);
                fetchTodos();
              }}
            >
              <i className="fa-solid fa-trash text-zinc-300 hover:text-red-500 mr-1"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
