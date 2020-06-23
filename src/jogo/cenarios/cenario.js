
function cenario(imagem, velocidade) {

    let x1 = 0;
    let x2 = width;

    function exibe() {
        image(imagem, x1, 0, width, height);
        image(imagem, x2, 0, width, height);
    }

    function move() {
        x1 = x1 - velocidade;
        x2 = x2 - velocidade;

        if (x1 < -width) {
            x1 = width;
        }

        if (x2 < -width) {
            x2 = width;
        }
    }

    return {
        exibe, move
    }

}
