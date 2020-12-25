let showCards = () =>{
    $("#hidden-div").slideToggle("slow");
    let button = $("#cards-button");
    button.html() == "VER MENOS" ? button.html("VER MÁS") : button.html("VER MENOS");
}

