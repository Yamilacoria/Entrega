function validateForm() {
  const name = document.getElementById('nombre').value;
  const age = document.getElementById('edad').value;
  let isValid = true;

  //valido si el campo nombre esta vacío
  if(name.trim() === '') {
    showError('empty-name', 'El nombre es obligatorio');
    isValid = false;
  } else {
    hideError('empty-name');
  }

  if(age.trim() === '') {
    showError('empty-age', 'El campo edad es obligatorio');
    isValid = false;
  } else {
    hideError('empty-age');
  }

  //Valida que el campo edad no este vacio y que la edad sea mayor a 18
  if(age.trim() !== '' && age < 18) {
    showError('min-age', 'El usuario es menor de edad');
    isValid = false;
  } else {
    hideError('min-age');
  }

  //Valida que el nombre tenga como mínimo dos caracteres
  if(name.trim() !== '' && name.length <= 1) {
    showError('min-name', 'El nombre tiene que tener 2 caracteres o más');
    isValid = false;
  } else {
    hideError('min-name');
  }

  if(name.charAt(0).toLowerCase() === 'a') {
    showError('starts-with-a', 'El nombre no puede comenzar con la letra A');
    isValid = false;
  } else {
    hideError('starts-with-a');
  }


  /*Validar si el nombre tiene algún carácter prohibido
  Se puede usar regexp o iterar los caracteres y compararlos con un 
  conjunto de caracteres prohibidos.
  */


  


  return isValid;
}

/*Función que muestre todos los mensajes de error*/
function showError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + '-error');
  errorElement.textContent = "❌ " + message;
  errorElement.style.display = 'block';
}

/*Función que oculte los mensajes de error*/
function hideError(fieldId) {
  const errorElement = document.getElementById(fieldId + '-error');
  errorElement.style.display = 'none';
}

/*Agregar un listener para el botón Enviar*/
const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click', function(event) {
  event.preventDefault;
  if(validateForm()) {
    window.location.href = "../pages/valExitosa.html";
  }
});

/*Redireccionamiento si los datos son válidos*/

