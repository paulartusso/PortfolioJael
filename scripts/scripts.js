const showCards = () =>{
    $("#hidden-div").slideToggle("slow");
    let button = $("#cards-button");
    button.html() == "VER MENOS" ? button.html("VER MÁS") : button.html("VER MENOS");
}

const bounce = () =>{
    let scroll = document.querySelector(".scroll");
    scroll.classList.add("bounce");
} 