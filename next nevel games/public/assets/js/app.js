console.log("NextLevel Games iniciado");

function cambiarTema(){

    document.body.classList.toggle("modo-claro");

}

function buscarJuego(){

    let texto =
    document.getElementById("busqueda")
    .value
    .toLowerCase();

    let tarjetas =
    document.querySelectorAll(".juego");

    tarjetas.forEach(card=>{

        let nombre =
        card.dataset.nombre.toLowerCase();

        if(nombre.includes(texto)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}