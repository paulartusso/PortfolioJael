//Muestra modal oculto y cambia texto de botón
const showCards = () =>{
    $("#hidden-div").slideToggle("slow");
    let button = $("#cards-button");
    button.html() == "VER MENOS" ? button.html("VER MÁS") : button.html("VER MENOS");
}

//Pone a saltar la imagen de scroll en mobile
const bounce = () =>{
    let scroll = document.querySelector(".scroll");
    scroll.classList.add("bounce");
    
    let renewBut = document.querySelector("#renew-but");
    renewBut.addEventListener("click", () =>{
    showInfo("#renew-2");
    });
    
    let odaBut = document.querySelector("#oda-but");
    odaBut.addEventListener("click", () =>{
    showInfo("#oda-2");
    });

    let vlBut = document.querySelector("#vl-but");
    vlBut.addEventListener("click", () =>{
    showInfo("#vl-2");
    });

    let mauBut = document.querySelector("#mau-but");
    mauBut.addEventListener("click", () =>{
    showInfo("#mau-2");
    });

    let gratBut = document.querySelector("#grat-but");
    gratBut.addEventListener("click", () =>{
    showInfo("#grat-2");
    });
    
    let arBut = document.querySelector("#ar-but");
    arBut.addEventListener("click", () =>{
    showInfo("#ar-2");
    });

    let erBut = document.querySelector("#er-but");
    erBut.addEventListener("click", () =>{
    showInfo("#er-2");
    });

    let majBut = document.querySelector("#maj-but");
    majBut.addEventListener("click", () =>{
    showInfo("#maj-2");
    });
} 

const toggleModal = () =>{
    const modal = document.querySelector(".overlay");
    modal.classList.toggle("hidden")
}

const showInfo = (selector) =>{
    toggleModal();
    changeButtonText();
    const element = document.querySelector(selector);
    element.classList.toggle("hidden");
}

const closeModal = () => {
    toggleModal();
    const elements = document.querySelectorAll('#modal-content > div');
    for (let el of elements) {
       el.classList.add('hidden');
    }
}

const changeButtonText = () =>{
    let button = document.querySelector("#close-button");
    let query = window.matchMedia("(max-width: 700px)");
    if (query.matches) {
        button.innerHTML = "CERRAR";
      } else {
        button.innerHTML = "x";
      }
}
