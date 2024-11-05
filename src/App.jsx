import { Header } from './components/header/Header'
import './App.css'
import { BlockAbout } from './components/BlockAbout/BlockAbout'
import MoreInfo from './components/MoreInfo/MoreInfo'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
import FormHeader from './components/FormHeader/FormHeader'

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <BlockAbout/>
        <MoreInfo/>
        <Feedback/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
