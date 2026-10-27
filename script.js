

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");


menuBtn.addEventListener("click", function () {
    menu.classList.toggle("aberto");


    const aberto = menu.classList.contains("aberto");


    menuBtn.setAttribute("aria-expanded", aberto);
    menuBtn.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );


    menuBtn.textContent = aberto ? "✕" : "☰";
});


const links = document.querySelectorAll("#menu a");


links.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menu");
        menuBtn.textContent = "☰";
    });
});



