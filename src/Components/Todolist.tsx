import DeleteButton from "./DeleteButton.tsx";
import {useTodosContext} from "../lib/hooks.ts";



const Todolist = () => {

  const {todos, handleToggleTodo} = useTodosContext()

  return (
      <ul
          className=''
      >
        {
          todos.length === 0 ? (
              <li className='h-full flex justify-center items-center font-semibold' >Start by adding a todo</li>
          ) : null
        }

        {
          todos.map((todo) => (
              <li
                  key={todo.id}
                  className='flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black-[8%]'
                  onClick={() => {
                    handleToggleTodo(todo.id)
                  }}
              >
                <span className={todo.isCompleted ? 'line-through text-[#ccc]' : ''}>{todo.text}</span >
                <DeleteButton id={todo.id}   />
              </li >
          ))
        }


      </ul >
  );
};

export default Todolist;