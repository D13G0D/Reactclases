import React, { useState, useEffect } from "react";


const initialUsuario = {
    nombre: "",
    apellido: "",
    correo: "",
    rut: ""
}

const FormularioUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, apellido, correo, rut } = usuario;

    useEffect(() => {
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

    const handleInputChange = (e) => {
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
                    <input class="form-control" placeholder="11111111-1" type="text" id="id" name="rut" value={rut} onChange={handleInputChange} />
                </div>
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
                {usuarioEditado !== null ? (
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
                {usuarioEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => setUsuarioEditado(null)}
                    >
                        Cancelar
                    </button>
                ) : (
                    <></>
                )}
                <br />
            </form>
        </div>
    )
}

export default FormularioUsuario;   