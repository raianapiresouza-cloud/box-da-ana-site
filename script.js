document.addEventListener("DOMContentLoaded", function () {

    //  SCROLL SUAVE

    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {

            e.preventDefault(); // impede o pulo seco

            const destinoID = this.getAttribute('href');
            const destino = document.querySelector(destinoID);

            if (destino) {

                //(sem mexer na posição manualmente
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });



    // ANIMAÇÃO AO SCROLL

    const elementos = document.querySelectorAll(".animar");

    function animarElementos() {

        const alturaTela = window.innerHeight;

        elementos.forEach(el => {

            const posicao = el.getBoundingClientRect().top;

            // quando entra na tela, aparece
            if (posicao < alturaTela - 100) {
                el.classList.add("aparecer");
            }
        });
    }

    //  roda quando carrega
    animarElementos();

    // roda no scroll
    window.addEventListener("scroll", animarElementos);

});