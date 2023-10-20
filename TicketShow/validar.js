function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var tel = document.getElementById("tel").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || tel === "" || mensaje === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }
    
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    if (tel.length !== 11) {
      alert("El campo 'tel' debe contener exactamente 11 dígitos numéricos.Sin +549");
      return false;
    }
    for (var j = 0; j < tel.length; j++) {
      var digit = tel.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'tel' solo puede contener dígitos numéricos.");
        return false;
      }
    }
    
    if (mensaje.length < 10) {
      alert("El campo 'mensaje' debe contener como mínimo 10 caracteres.");
      return false;
    }
       
    alert("Se ha enviado correctamente el formulario.");
    return true; 
  }