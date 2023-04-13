class Teclado {

    generarTeclado() {
        const teclado = document.getElementById('teclado');
        for (let i = 65; i <= 90; i++) {
            const letra = String.fromCharCode(i);
            if (i === 78) {
                this.crearBoton("Ñ", teclado)
            }
            this.crearBoton(letra, teclado);
        }

    }

    crearBoton(letra, contenedor) {
        console.log(letra);

        const btn = document.createElement('button');
        btn.id = letra;
        btn.textContent = letra;
        btn.classList.add('btn','btn-primary','m-1');
        btn.addEventListener(
            'click',
            () => {
                this.presionarBoton(letra)
            }
        );
        contenedor.appendChild(btn);
    }
    presionarBoton(letra) {

        console.log(letra);
    }
}
const teclado = new Teclado();
teclado.generarTeclado();