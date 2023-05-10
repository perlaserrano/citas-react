import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"

function App() {

const [pacientes,setPacientes] = useState([])
const [paciente,setPaciente] = useState({})

  return (
    <div className="container mx-auto mt-20">
  <Header
  />
  <div className="mt-12 flex">
  <Formulario setPacientes={setPacientes} pacientes={pacientes}/>
  <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}/>
  </div>
 
  </div>
  )
}

export default App
