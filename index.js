// Função para gerar um número aleatório entre 1 e 6
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para atualizar as imagens dos dados para valores aleatórios
function refreshDiceImages() {
    // Selecionar as imagens dos dados
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");

    // Gerar números aleatórios para os dados de cada jogador
    var randomNumber1 = generateRandomNumber();
    var randomNumber2 = generateRandomNumber();

    // Atualizar as imagens dos dados com base nos números aleatórios gerados
    img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    
    // Mudanda o h1 dependendo quem ganha
    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").innerHTML = "Player 1 Wins!"
    } else if (randomNumber2 > randomNumber1) {
        document.getElementById("result").innerHTML = "Player 2 Wins!"
    } else {
        document.getElementById("result").innerHTML = "Draw!"
    }
}

// Chamar a função para atualizar as imagens dos dados quando a página carregar
window.onload = function () {
    refreshDiceImages();
};

