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
    showInfo("#renew-info");
    });
    
    let odaBut = document.querySelector("#oda-but");
    odaBut.addEventListener("click", () =>{
    showInfo("#oda-info");
    });
} 

const toggleModal = () =>{
    const modal = document.querySelector(".overlay");
    modal.classList.toggle("hidden")
}

const showInfo = (selector) =>{
    toggleModal();
    const element = document.querySelector(selector);
    element.classList.toggle("hidden");
}

