import {useTodosContext} from "../lib/hooks.ts";

type DeleteButtonProps = {
  id: number
}

const DeleteButton = ({id}: DeleteButtonProps) => {
  const {handleDeleteTodo} = useTodosContext()
  
  return (
      <button onClick={(e) => {
        e.stopPropagation()

        handleDeleteTodo(id)
      }}>❌</button >
  );
};

export default DeleteButton;