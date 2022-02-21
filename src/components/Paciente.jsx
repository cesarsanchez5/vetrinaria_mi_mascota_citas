 
import Swal from 'sweetalert2'


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

     
    const handleEliminar = () => {        

        Swal.fire({
            title: 'Estas seguro que deseas eliminar el paciente?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          })
            .then(eliminarPaciente(id))
            .then((result) => {
                if (result.isConfirmed  ) {                
                        Swal.fire(
                            'Eliminado!',
                            'Se ha eliminado con exito',
                            'success'
                        )
            }
          })
    
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700  ">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700  ">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700  ">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700  ">Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700  ">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-gray-500 hover:bg-gray-700  text-white font-bold   rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold  rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
