import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState,useEffect } from "react"

function App() {

const [pacientes,setPacientes] = useState([])
const [paciente,setPaciente] = useState({})

useEffect(() =>{
const obtenerLS = () =>{
  const pacienteLS = JSON.parse(localStorage.getItem('paciente')) ?? [];
  setPacientes(pacienteLS);
}

obtenerLS()
}, [])

useEffect(() =>{
localStorage.setItem('pacientes', JSON.stringify( pacientes ))
}, [pacientes])

 const eliminarPaciente = (id) =>{
const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)

console.log(pacientesActualizados);
 }

  return (
    <div className="container mx-auto mt-20">
  <Header
  />
  <div className="mt-12 flex">
  <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente}/>
  <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
  </div>
 
  </div>
  )
}

export default App
