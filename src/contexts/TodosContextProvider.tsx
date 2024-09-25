import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {Todo} from "../lib/types.ts";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

type TTodosContext = {
  todos: Todo[],
  totalNumberOfTodos: number,
  numberOfCompletedTodos: number,
  handleAddTodo: (todoText: string) => void,
  handleToggleTodo: (id: number) => void,
  handleDeleteTodo: (id: number) => void
}

export const TodosContext = createContext<TTodosContext | null>(null)

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos')

  if (savedTodos) {
    return JSON.parse(savedTodos)
  } else {
    return []
  }
}

type TodosContextProvider = PropsWithChildren

const TodosContextProvider = ({children}: TodosContextProvider) => {

  const {isAuthenticated} = useKindeAuth()

  // state

  const [todos, setTodos] = useState<Todo[]>(getInitialTodos)

  // derived state

  const totalNumberOfTodos = todos.length
  const numberOfCompletedTodos = todos.filter(todo => todo.isCompleted).length

  // envent handler / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated ) {
      alert('Log in to add more than 3 todos')
      return
    }

    if (todoText === '') {
      return
    }

    setTodos(prev => [
      ...prev,
      {
        id: prev.length +1,
        text: todoText,
        isCompleted: false
      }
    ])
  }

  const handleToggleTodo = (id: number) => {
    setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return ({...todo, isCompleted: !todo.isCompleted})
          }

          return todo
        })
    )
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // Side Effect
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos]);

  const contextValue = {
    todos,
    totalNumberOfTodos,
    numberOfCompletedTodos,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo
  }

  return <TodosContext.Provider value={contextValue} children={children} />
};

export default TodosContextProvider;