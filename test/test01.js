function geekshubs(iterations) {

    let arrayInicial = [];

    for (let i = 1; i <= iterations; i++) {
        arrayInicial.push(i);
    }

    let arrayModificado = arrayInicial.map((valor) => {
        let resto3 = valor % 3
        let resto5 = valor % 5

        if (resto3 == 0) {
            valor = 'Geeks';
        } else if (resto5 == 0) {
            valor = 'Hubs';
        }

        if (resto3 == 0 & resto5 == 0) {
            valor = 'GeeksHubs';
        }

        return valor;
    })

    let arrayUnido = arrayModificado.map((linea) => linea + "\n")

    return arrayUnido.join("");
}

module.exports = geekshubs;