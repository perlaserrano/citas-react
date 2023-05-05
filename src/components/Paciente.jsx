

const Paciente = () => {
  return (
    <div className="m-3 px-5 py-10 rounded-xl bg-white shadow-md">
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {" "}
        <span className="font-normal normal-case">Hook</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {" "}
        <span className="font-normal normal-case">Perla</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {" "}
        <span className="font-normal normal-case">correo@correo.com</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {" "}
        <span className="font-normal normal-case">10 diciembre 2022</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {" "}
        <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore veniam non at dolores vitae veritatis est aliquam exercitationem eaque in ea nam sunt, sapiente laborum dolore quis aliquid saepe.</span>
    </p>
</div>
  ) 
  
}
 export default Paciente;