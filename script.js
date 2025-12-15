function cambiarImagen() {
    const imagen = document.getElementById("miImagen");
    if (imagen.src.endsWith("avatar.png")) {
        imagen.src = "amor.png"; // ← cambia por la segunda imagen
    } else {
        imagen.src = "avatar.png"; // ← vuelve a la original
    }
}
