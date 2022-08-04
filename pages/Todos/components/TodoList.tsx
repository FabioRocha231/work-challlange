import { JsonTodoResponseType } from "../../../core/types/jsonPlaceApiResponseTypes"
import { BsTrashFill } from 'react-icons/bs'
import { useContext, useState } from "react"
import { UserContext } from "../../../context/contextApi"
interface TodoListParams {
  todos: JsonTodoResponseType[]
  setTodoId(userId: number): void
}


export const TodoList = ({ todos }: TodoListParams) => {
  const [todoId, setTodoId] = useState<number>()
  const { deletTodoFromDB } = useContext(UserContext)

  return (
    <div className="flex flex-row flex-wrap gap-x-5 gap-y-5 justify-center items-center py-5">
      {todos?.filter(({ id }) => id !== todoId).map(({ id, title, completed }) => {
        return (
          <div key={id} className="flex justify-center">
            <div className="flex flex-col justify-center p-3 rounded-lg shadow-lg bg-slate-200 w-80 h-40">
              <p className="text-gray-900 text-base leading-tight font-medium mb-2">{title}</p>
              <div className="flex flex-row gap-x-2">
                <button
                  type="button"
                  className="flex flex-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => { }}
                >
                  {completed ? "Finished" : "Not Finished"}
                </button>
                <button
                  className="flex justify-center items-center w-10 bg-rose-400 rounded-lg"
                  onClick={() => {
                    setTodoId(Number(id))
                    deletTodoFromDB(id)
                  }}
                >
                  <BsTrashFill />
                </button>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}
