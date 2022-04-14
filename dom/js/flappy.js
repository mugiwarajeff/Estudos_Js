function geraBarreira(initialPosition) {
    let divBarreiraContainer = document.createElement("div");
    divBarreiraContainer.classList.add("barreiras-container");
    divBarreiraContainer.style.right = `${initialPosition}px`

    let divBarreiraTopContainer = document.createElement("div");
    divBarreiraTopContainer.classList.add("barreira-top-container")

    let divBarreiraBottomContainer = document.createElement("div");
    divBarreiraBottomContainer.classList.add("barreira-bottom-container");

    let barreiraBody = document.createElement("div");
    barreiraBody.classList.add("barreira-body");

    let barreiraHead = document.createElement("div");
    barreiraHead.classList.add("barreira-head");

    let barreiraBody2 = document.createElement("div");
    barreiraBody2.classList.add("barreira-body");

    let barreiraHead2 = document.createElement("div");
    barreiraHead2.classList.add("barreira-head");

    divBarreiraBottomContainer.appendChild(barreiraBody);
    divBarreiraBottomContainer.appendChild(barreiraHead);

    divBarreiraTopContainer.appendChild(barreiraBody2);
    divBarreiraTopContainer.appendChild(barreiraHead2);

    divBarreiraContainer.appendChild(divBarreiraTopContainer);
    divBarreiraContainer.appendChild(divBarreiraBottomContainer);

    let paginaGame = document.querySelector(".div-flappy-container");
    paginaGame.appendChild(divBarreiraContainer)

    moveBarreira();
}

function moveBarreira(){
    let initialPosition = 0;
    let barreiras = document.querySelector(".barreiras-container");
    let currentPosition = -600;
    
    let movimento = setInterval(()=> {
        barreiras.style.right = `${currentPosition}px`;
        currentPosition += 1;
        console.log(barreiras.style.right)

        if (barreiras.style.right == "700px"){
            barreiras.parentNode.removeChild(barreiras);
            clearInterval(movimento);
            geraBarreira(-600);
        }
    },1) 
}



