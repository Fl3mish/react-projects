import * as TodoServices from "./services/todo";
const TodoItem = (props) => {
  const { todo, fetchTodos } = props;
  return (
    <div className="bg-white border border-zinc-300 my-2 rounded-md p-2 ">
      <div className="text-zinc-600 flex items-center justify-between">
        <div>
          {todo.complete ? (
            <i className="fa-regular fa-check-circle text-green-600 text-xl mr-2"></i>
          ) : (
            <i className="fa-regular fa-circle text-stone-300  text-xl mr-2"></i>
          )}
          {todo.task}
        </div>

        <button
          onClick={async () => {
            await TodoServices.deleteTodo(todo.id);
            fetchTodos();
          }}
        >
          <i className="fa-solid fa-trash text-zinc-300 hover:text-red-500 mr-1"></i>
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
