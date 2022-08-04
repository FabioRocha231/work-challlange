import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserContext } from "../../context/contextApi"
import { JsonTodoResponseType } from "../../core/types/jsonPlaceApiResponseTypes"
import { Meta } from "../../layouts/Meta"
import { Main } from "../../templates"
import { NewTodoModal } from "./components/Modal"
import { TodoList } from "./components/TodoList"
import { TodosActions } from "./components/TodosActions"

const Home = () => {
  const router = useRouter()
  const { user, id } = router.query
  const { todos, setUserId } = useContext(UserContext)
  const [todoId, setTodoId] = useState<number>(0)
  const [filter, setFilter] = useState('')
  const [todosAfterFilter, setTodosAfterFilter] = useState<JsonTodoResponseType[]>([])
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const handleUserTodo = () => {
    if (filter === "") {
      setTodosAfterFilter(todos)
    }
    if (filter === 'completed') {
      const tempCompleted = todos.filter(({ completed }) => completed != false)
      setTodosAfterFilter(tempCompleted)
    }
    if (filter === "todo") {
      const tempTodo = todos.filter(({ completed }) => completed == false)
      setTodosAfterFilter(tempTodo)
    }
    if (todoId > 0) {
      console.log(todoId)
      const todoAfterDelet = todos.filter(({ id }) => todoId !== id)
      setTodosAfterFilter(todoAfterDelet)
    }
  }


  useEffect(() => {
    setUserId(Number(id))
  }, [id])

  useEffect(() => {
    handleUserTodo()
  }, [filter, todoId])
  return (
    <Main
      meta={
        <Meta
          title="Todos"
          description="Todos Page"
        />
      }

    >
      <Header />
      <main className="bg-slate-800">
        <TodosActions userName={user as string} setFilter={setFilter} setIsOpen={openModal} />
        <TodoList todos={filter === "" ? todos : todosAfterFilter} setTodoId={setTodoId} />
        <NewTodoModal isOpen={modalIsOpen} closeModal={closeModal} />
      </main>
      <ToastContainer />
      <Footer />
    </Main>
  )
}
export default Home
