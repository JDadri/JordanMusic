function validateForm() {
    var nombre = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var razon = document.getElementById('Reason').value;
    var descripcion = document.getElementById('Desc').value;
    var isValid = true;
    if (nombre === '') {
      document.getElementById('nombre').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('nombre').classList.remove('error');
    }

    if (email === '') {
      document.getElementById('email').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('email').classList.remove('error');
    }

    if (razon === '') {
      document.getElementById('razon').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('razon').classList.remove('error');
    }

    if (descripcion === '') {
      document.getElementById('descripcion').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('descripcion').classList.remove('error');
    }

    return isValid;
  }    
function click() {
  window.location.href = "suggestThanks.html"
}