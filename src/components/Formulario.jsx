import {useState, useEffect} from "react"
import Error from "./Error"

const Formulario = ({setPacientes,pacientes}) => {

     const [nombre, setNombre ] = useState(' ')
     const [propietario, setPropietario ] = useState(' ')
     const [email, setEmail] = useState(' ')
     const [fecha, setFecha ] = useState(' ')
     const [sintomas, setSintomas ] = useState(' ')

     const [error, setError] = useState(false)

     const generarId = () =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return fecha + random
     }

    const handleSubmit = (e) =>{
        e.preventDefault()

        // Validacion de formulario

        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setError(false)
                return;
        }
        setError(true)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id:generarId()
        }

        // console.log(objetoPaciente);

        setPacientes([...pacientes,objetoPaciente])

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }
 
    return(
         <div className="md:w-1/2 lg:w-2/5 px-5  mx-5">
            <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

            <p className="text-lg mt-5 text-center mb-10">Anade paciente y {''}<span className="text-indigo-600 font-bold text-lg">Administralos</span>
            
            </p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md py-10 px-5 mb-5">
             {error && <Error><p>Todos los campos son obligatorios</p></Error> }
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md" value={nombre} onChange={(e) => setNombre(e.target.value )} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Propietario</label>
                    <input id="mascota" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"  value={propietario} onChange={(e) =>  setPropietario(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Email contacto propietario" className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                    <input id="alta" type="date"  className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"  value={fecha} onChange={(e) => setFecha(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea  className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"  name="" id="sintomas" placeholder="Describe los sintomas" cols="30" rows="10" value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
                   
                </div>

                <input type="submit" className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value="Agregar paciente" />
            </form>

        </div>

    )
}

export default Formulario;