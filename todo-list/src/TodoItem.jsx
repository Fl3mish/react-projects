const TodoItem = (props) => {
  const { todo } = props;
  return (
    <div className="bg-white border border-zinc-300 my-2 rounded-md p-2 ">
      <div className="text-zinc-600 flex items-center">
        {todo.complete ? (
          <i className="fa-regular fa-check-circle text-green-600 text-xl mr-2"></i>
        ) : (
          <i className="fa-regular fa-circle text-stone-300  text-xl mr-2"></i>
        )}
        {todo.task}
      </div>
    </div>
  );
};
export default TodoItem;
