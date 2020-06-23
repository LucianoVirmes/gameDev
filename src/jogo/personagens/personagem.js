function personagem(imagem) {

    let frameAtual = 0;

    function exibe() {
        let x = frameAtual % 4 * 220;
        let y = Math.floor(frameAtual / 4) * 270;

        image(imagem, 0, height - 135, 110, 135, x, y, 220, 270);
        anima();
    }


    function anima() {
        frameAtual++;
        if (frameAtual >= 16){
            frameAtual = 0;
        }
    }
    return {
        exibe
    }
}
