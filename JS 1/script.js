let botao = document.querySelector("#botao");
botao.style.background = "blue"

botao.addEventListener("mouseover", e => {
    botao.style.background = "green"
});

botao.addEventListener("mouseout", e => {
    botao.style.background = "blue"
});

botao.addEventListener("click", e => {
    botao.style.background = "red"
    botao.innerHTML = "Quebrei"
});
