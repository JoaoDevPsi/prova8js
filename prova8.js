function converter() {
    const metros = parseFloat(document.getElementById("metros").value);
    const unidadeDestino = document.getElementById("unidadeDestino").value;
    let resultado;

    switch (unidadeDestino) {
        case "jardas":
            resultado = metros * 1.09361;
            break;
        case "pes":
            resultado = metros * 3.28084;
            break;
        case "polegadas":
            resultado = metros * 39.3701;
            break;
        case "milhas":
            resultado = metros / 1609.34;
            break;
        default:
            resultado = "Unidade de destino inválida";
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado} ${unidadeDestino}`;
}
