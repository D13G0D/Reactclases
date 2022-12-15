import React, { useState, useEffect } from "react";


const initialUsuario = {
    nombre: "",
    apellido: "",
    correo: "",
    rut: ""
}

const FormularioUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => { /* Entre llaves llamamos a todas las funciones del home */
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, apellido, correo, rut } = usuario;

    useEffect(() => {      //funcion de edicion de usuarios
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario(
                {
                    nombre: "",
                    apellido: "",
                    correo: "",
                    rut: "",
                }
            )
        }
    }, [usuarioEditado]);

    const handleInputChange = (e) => {  /* Funcion que trabaja internamente para cambiar los valores e=event */
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }

    return (
        <div class="card container mb-2">
            <form>
                {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}
                <div class="mb-3" >
                    <label class="form-label" for="id">Rut</label>
                    <input class="form-control" placeholder="11111111-1" type="text" id="id" name="rut" value={rut} onChange={handleInputChange} /> {/*cambios detectados por onChange */}
                </div>                            {/* Necesitamos el name y value que deben ser iguales que en nuestra funcion use effect que detecta los cambios en el usuario*/}
                <div class="mb-3" >
                    <label class="form-label" for="id">Nombre</label>
                    <input class="form-control" placeholder="Juan" type="text" id="Nombre" name="nombre" value={nombre} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Apellido</label>
                    <input class="form-control" placeholder="Perez" type="text" id="Apellido" name="apellido" value={apellido} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Correo</label>
                    <input class="form-control" placeholder="juanperez@correo.cl" type="email" id="Correo" name="correo" value={correo} onChange={handleInputChange} />
                </div>
                {usuarioEditado !== null ? ( // pregunta para tener botones dinamicos segun lo que se este haciendo por la pregunta
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userEdit(usuario)}
                    >
                        Editar usuario
                    </button>
                ) : (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userAdd(usuario)}
                    >
                        Ingresar usuario
                    </button>

                )}
                {usuarioEditado !== null ? (  //seteamos con la pregunta que queremos que haga en este caso cancelar la cancelacion si no queremos que la otra 
                    <button                   //respuesta de la pregunta nos entregue un valor utilizamos <></> en reemplazo
                        type="button"
                        class="btn btn-danger"
                        onClick={() => setUsuarioEditado(null)}
                    >
                        Cancelar
                    </button>
                ) : (
                    <></> //respuesta vacia (no queremos que haga nada)
                )}
                <br />
            </form>
        </div>
    )
}

export default FormularioUsuario;   