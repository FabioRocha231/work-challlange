import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { JsonPlaceApi } from "../core/class/apis/jsonPlaceApi";
import { JsonTodoResponseType } from "../core/types/jsonPlaceApiResponseTypes";
import { JsonPlaceUserTypes } from "../core/types/jsonPlaceUserTypes";


export interface UserContextData {
  setUserId(userId: number): void
  deletTodoFromDB(userId: number): void
  todos: JsonTodoResponseType[]
  users: JsonPlaceUserTypes[]
}

export interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<JsonPlaceUserTypes[]>([])
  const [userId, setUserId] = useState<number>(0)
  const [todos, setTodos] = useState<JsonTodoResponseType[]>([])

  const getAllUsers = async () => {
    const jsonUsers = new JsonPlaceApi()
    try {
      const jsonUserResponse = await jsonUsers.GetJsonUser()
      setUsers(jsonUserResponse)
    } catch (e: any) {
      toast.error("error when get users, please try again")
    }
  }

  const getTodosByUserId = async (userId: number) => {
    const todosByUserId = new JsonPlaceApi()
    if (!userId) return
    try {
      const todosResponse = await todosByUserId.TodosByUserId(userId)
      setTodos(todosResponse)
      toast.success("Success on getting your todoList")
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  const deletTodoFromDB = async (userId: number) => {
    const deletFunction = new JsonPlaceApi()
    if (!userId) return
    try {
      const response = await deletFunction.DeletTodo(userId)
      toast.success("Successfull deleted")
    } catch (e: any) {
      toast.error("error when deleting Todo")
      console.error(e.message)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  useEffect(() => {
    getTodosByUserId(userId)
  }, [userId])


  return (
    <UserContext.Provider
      value={{
        setUserId,
        todos,
        users,
        deletTodoFromDB
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
