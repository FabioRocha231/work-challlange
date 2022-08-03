import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Meta } from "../../layouts/Meta"
import { Main } from "../../templates"

const Home = () => {
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
      <Footer />
    </Main>
  )
}

export default Home
