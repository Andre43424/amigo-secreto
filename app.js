let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim() !== "") {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = ''; // Limpia el campo de entrada
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista antes de agregar los nuevos elementos
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres de amigos para sortear.');
        return;
    }
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let amigoGanador = amigos[indiceGanador];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoGanador}!`;
}
