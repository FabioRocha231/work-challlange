import { Footer } from "../../components/Footer"
import { SocialIcons } from "../../components/Footer/components/SocialIcons"
import { Header } from "../../components/Header"
import { Meta } from "../../layouts/Meta"
import { Main } from "../../templates"

const Home = () => {
  return (
    <Main
      meta={
        <Meta
          title="Escola Mais Challange"
          description="A Front end Challange from Escola Mais by HR Filho"
        />
      }
    >
      <Header />
      <div className="mx-5 min-h-screen grid place-content-center">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
          <h1 className="text-3xl mb-3">Fabio HR Filho</h1>
          <p className="text-lg">You can contact me whenever you need help or just curious about something.</p>
        </div>
        <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <SocialIcons />
        </div>
      </div>
      <Footer />
    </Main>
  )
}


export default Home
