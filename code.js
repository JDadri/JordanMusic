function mostrarAlerta() {
    var respuesta = confirm("¿Quieres informar sobre nuestra página?");

    if (respuesta) {
        window.location.href = "../RedirectMenu/suggest.html";
    }else{
        null
    }
}