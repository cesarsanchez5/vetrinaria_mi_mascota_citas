import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            { pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-2xl text-center">Listado de Pacientes</h2>
                    <p className="text-lg mt-2 mb-4 text-center">
                        Administra tus {''}
                        <span  >Pacientes  </span>
                    </p>

                    { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-2xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-2 mb-4 text-center">
                        Comienza a agregar pacientes {''}
                        <span  >y aparecerán debajo este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
