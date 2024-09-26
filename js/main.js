document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar");
    const abrir = document.querySelector(".abrir-menu");
    const cerrar = document.querySelector(".cerrar-menu");
    const body = document.body;

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
        console.log("Menú abierto");
        body.classList.add("no-scroll");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        console.log("Menú cerrado");
        body.classList.remove("no-scroll");
    });
});
