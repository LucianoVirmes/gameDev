let imagemCenario;
let imagemPersonagem;
let ambiente;
let hipsta;
let somAmbiente;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somAmbiente = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ambiente = cenario(imagemCenario, 3);
  hipsta = personagem(imagemPersonagem);
  frameRate(40);
  somAmbiente.loop();
}

function draw() {
  ambiente.exibe();
  hipsta.exibe();
  ambiente.move();
}

document.getElementById("audio").addEventListener("click", playSound);

function playSound() {
  getAudioContext().resume();
}

function stopSound() {
  getAudioContext().suspend();
}