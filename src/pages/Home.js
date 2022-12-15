import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormularioUsuario,
  TablaUsuarios,
  BotonFormulario,
} from "../components";

const usuario1 = [
  {
    nombre: "Joseph",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
    rut: "9563214-8",
  },
  {
    nombre: "Josuke",
    apellido: "Higashikata",
    correo: "jojo@gmail.com",
    rut: "17456329-9",
  },
  {
    nombre: "Jotaro",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
    rut: "9563213-8",
  },
];

const usuario2 = {
  nombre: "Josuke",
  apellido: "Higashikata",
  correo: "jojo@gmail.com",
  rut: "17456329-9",
};

const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
  //en este momento user (deberia ser state pero solo es el nombre) vale lo mismo que usuario 1
  //genera una funcion setteadora que me va a permitir cambiar los datos se usuario 1 sin afectarlo directamente(setState)
  const [user, setUser] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const userDelete =(rutUsuario)=>{
    //esta funcion filtra mi lista de usuarios
    const changeUser = user.filter(usuario => usuario.rut !== rutUsuario);
    //al momento de ocupar la funcion setState, yo le voy a cambiar el valor TEMPORAL a mis usuarios
    setUser(changeUser);
  }

  const userAdd = (usuario)=>{
    const addUsuario =[  
      ...user, usuario //Tenemos la caja con usuarios (user) y lo mantenemos y agregamos un nuevo usuario
    ]
    setUser(addUsuario); //setUser ahora tiene todos los usuarios anteriores y el nuevo usuario
  }

  const userEdit =(usuarioEditado)=>{
    const editUser = user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario)) //filtramos por rut y hacemos una pregunta creando 2 escenarios 
    setUser(editUser); // asi podemos tener botones y acciones mas dinamicas
  }

  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col"> {/* agregamos todas las funciones creadas donde las usaremos para luego llamarlas en el componente recuerda el nombre que se le da aqui es el mismo que */}
          <FormularioUsuario userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/> {/* el que pides en el componente */} 
        </div>                        {/* primerNombreParaExportarFuncion = {Nombre de nuestra funcion creada}  */}
      </div>
      <BotonFormulario infoBoton={"Ir a autos"} handleOnClick={handleOnClick} />
      <hr />
      <div class="row">
        <div class="col">
          <TablaUsuarios usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
