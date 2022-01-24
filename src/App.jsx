import React from 'react';
import './App.css';
import users from "./data.js"

function App() {
  const title = document.querySelector(".title");

  const validar = ()=>{
    const mail = document.querySelector("#mail")
    const password = document.querySelector("#password")
    
    if(users.mail == mail.value && users.password == password.value){
      alert("ok");
    }else{
      alert("Usuario y/o contraseña incorrecto")
    }
  }
  return (
    <div id="App">
      <main>
        <div className='container'>
          <div className='form'>
            <h2>A N A L I T I C S</h2>
            <div className='information'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/2048px-OOjs_UI_icon_userAvatar-constructive.svg.png" alt="logo"/>
              <input id="mail" type="mail" placeholder='User'/>
            </div>
            <div className='information'>
              <img src="https://icones.pro/wp-content/uploads/2021/05/icone-cadenas-vert.png" alt="logo"/>
              <input id="password" type="password" placeholder='password'/>
            </div>
            <p>
              <input type="checkbox" />Recordar mis credenciales
            </p>
            <button onClick={()=>{validar()}}>Iniciar Sesion</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
