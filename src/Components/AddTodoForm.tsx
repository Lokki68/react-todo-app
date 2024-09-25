import Button from "./Button.tsx";
import {useState} from "react";
import {useTodosContext} from "../lib/hooks.ts";

const AddTodoForm = () => {

  const [todoText, setTodoText] = useState('')
  const {handleAddTodo} = useTodosContext()

  return (
      <form onSubmit={e => {
        e.preventDefault()

        handleAddTodo(todoText)

        setTodoText('')
      }} >
        <h2 className='font-medium text-[#231D15]' >Add a todo</h2>
        <input
            className='h-[45px] border border-black-[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px] '
            type='text'
            name='todo'
            id='todo'
            value={todoText}
            onChange={e => setTodoText(e.target.value)}
        />
        <Button>Add to list</Button >
        
      </form >
  );
};

export default AddTodoForm;