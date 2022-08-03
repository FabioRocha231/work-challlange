import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Meta } from '../layouts/Meta'
import { Main } from '../templates'
import { MainContent } from '../components/Main'

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
      <MainContent />
      <Footer />
    </Main>
  )
}


export default Home
