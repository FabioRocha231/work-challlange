import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { JsonPlaceApi } from "../core/class/apis/gitApi";
import { JsonTodoResponseType } from "../core/types/jsonPlaceApiResponseTypes";
import { JsonPlaceUserTypes } from "../core/types/jsonPlaceUserTypes";


export interface UserContextData {
  getTodosByUserId(userId: string): void
  users: JsonPlaceUserTypes[]
  todos: JsonTodoResponseType[]
}

export interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<JsonPlaceUserTypes[]>([])
  const [todos, setTodos] = useState<JsonTodoResponseType[]>([])


  const getAllUsers = async () => {
    const jsonUsers = new JsonPlaceApi()
    const jsonUserResponse = await jsonUsers.GetJsonUser()
    setUsers(jsonUserResponse)
  }

  const getTodosByUserId = async (userId: string) => {
    const todosByUserId = new JsonPlaceApi()
    const todosResponse = await todosByUserId.TodosByUserId(userId)
    setTodos(todosResponse)
  }


  useEffect(() => {
    getAllUsers()
  }, [])

  // useEffect(() => {
  //  getTodosByUserId()
  //},[])

  return (
    <UserContext.Provider
      value={{
        getTodosByUserId,
        users,
        todos
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
