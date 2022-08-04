import { useRouter } from "next/router"
import { useContext } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserContext } from "../../context/contextApi"
import { Meta } from "../../layouts/Meta"
import { Main } from "../../templates"
import { TodoList } from "./components/TodoList"

const Home = () => {
  const router = useRouter()
  const { user, id } = router.query
  const { todos, getTodosByUserId } = useContext(UserContext)
  console.log(user, id)
  console.log("alalalala")
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
      <TodoList todos={todos} />
      <Footer />
    </Main>
  )
}

export default Home
