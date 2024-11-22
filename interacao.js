'use strict';

// Função para perguntar o nome e exibir a mensagem personalizada
const welcomeUser = () => {
    const userName = prompt("Qual é o seu nome?");
    if (userName) {
        alert(`Bem-vindo(a), ${userName}!`);
    } else {
        alert("Bem-vindo(a)!");
    }
};

// Chama a função ao carregar a página
window.onload = welcomeUser;
    
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className === "light-theme") {
        this.textContent = "Modo escuro";
    } else {
        this.textContent = "Modo claro";
    }
});
