// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

function validarEmail() {
  let emailParaValidar = document.getElementById("email-input").value;
  const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regExEmail.test(emailParaValidar)) {
    return emailParaValidar;
  } else {
    return false;
  }
}

function validarPassword() {
  let passwordParaValidar = document.getElementById("password-input").value;
  if (passwordParaValidar.length >= 5) {
    return passwordParaValidar;
  } else {
    return false;
  }
}
function validarUsuario(usuarios, email, password) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email && usuarios[i].password === password) {
      return true;
    }
  }
  return false;
}

function validarDatos() {
  const email = validarEmail();
  const password = validarPassword();
  if (
    email &&
    password &&
    validarUsuario(baseDeDatos.usuarios, email, password)
  ) {
    return true;
  } else {
    return false;
  }
}

function ocultarElementosHtml(elemento) {
  elemento.classList.add("hidden");
}

function mostrarError(mensajeError) {
  let errorBoxMsj = document.getElementById("error-container");
  errorBoxMsj.innerHTML = `<small>${mensajeError}</small>`;
  errorBoxMsj.classList.toggle("hidden");
}

function accesoAprobado() {
  let formulario = document.querySelector("form");
  formulario.classList.add("hidden");
  let titulo = document.querySelector("h1");
  titulo.innerText = "Bienvenido al sitio 😀";
}

let logInPress = document.querySelector("button.login-btn");

logInPress.addEventListener("click", async function (e) {
  if (validarDatos()) {
    mostrarError("");
    let avisoCargando = document.getElementById("loader");
    avisoCargando.classList.remove("hidden");
    await new Promise((resolve) => {
      setTimeout(() => {
        ocultarElementosHtml(avisoCargando);
        resolve();
      }, 3000);
    });
    accesoAprobado();
  } else {
    mostrarError("Alguno de los datos ingresados son incorrectos");
  }
});

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
