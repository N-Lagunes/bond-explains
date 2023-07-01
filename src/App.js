import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Header from "./components/Header" // Asegúrate de importar el componente Header
import Tutorials from "./components/Tutorials"

function App() {
  return (
    <div className="app__container">
      <Header />
      <Routes>
        <Route path="/" element={ <Tutorials/> } />
        <Route path="about" element={ <About/> } />
      </Routes>
    </div>
  )
}

export default App
