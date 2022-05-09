function barreira(elementType, elementClass, barrerHeight){
    const elemento = document.createElement(elementType);
    const head = document.createElement(elementType);
    const body = document.createElement(elementType)

    elemento.classList.add(elementClass);
    head.classList.add("barreira-head")
    body.classList.add("barreira-body")

    // adicionando tamanho da barreira
    body.style.height = `${barrerHeight}px`

    elemento.appendChild(body);
    elemento.appendChild(head);
    return elemento;
}

function parBarreiras(elementType, elementClass, initialPosition){
    const randomHeight = Math.random() * 300 + 100;
    const gameContainerHeight = document.querySelector(".div-flappy-container").clientHeight;
    const barrersGapFixed = 250;
    const barreiraTop = new barreira("div", "barreira-top-container", randomHeight);
    const barreiraBottom = new barreira("div", "barreira-bottom-container", gameContainerHeight - randomHeight - barrersGapFixed);
    let currentPosition = initialPosition;

    const barreirasContainer = document.createElement(elementType);
    barreirasContainer.classList.add(elementClass);

    barreirasContainer.appendChild(barreiraTop);
    barreirasContainer.appendChild(barreiraBottom);

    //função para se retirar da DOM

    function moveParBarreira(){
        currentPosition -= 1;
        barreirasContainer.style.left = `${currentPosition}px`;

       // funcionalidade para se retirar da DOM
        if (currentPosition < barreirasContainer.clientWi){
            barreirasContainer.parentNode.removeChild(barreirasContainer);
        }
    }
    const barrerMove = setInterval(() => {
        moveParBarreira()
    }, 1);

    function pararBarreira(){
        clearInterval(barrerMove);
    }
    
    return barreirasContainer;

}


function birdMovimentation(){
    const bird = document.querySelector(".bird-container img");
    let birdTopDistance = 50;

   const fallBird = setInterval(() => {
       bird.style.bottom = `${birdTopDistance}%`;
       birdTopDistance -= 0.25
       
       if (birdTopDistance <= 0){
           birdTopDistance = 0;
       }else if (birdTopDistance >= 95){
           birdTopDistance = 95;
       }
   }, 10);

   window.onclick = e => {
           birdTopDistance += 10; 
   }

   document.addEventListener("keyup", function(e) {
       var space = 32;
       if (space){
           birdTopDistance += 10;
       }
   })
   
   setInterval(() => {
       const birdTop = bird.getBoundingClientRect().top;
       const birdLeft = bird.getBoundingClientRect().left;
       const birdX = bird.getBoundingClientRect().x;
       const barrerTopTop = document.querySelector(".barreira-top-container").getBoundingClientRect().top;
       const barrerTopHeight = Math.round(document.querySelector(".barreira-top-container").getBoundingClientRect().height);
       const barrerTopWidth = Math.round(document.querySelector(".barreira-top-container").getBoundingClientRect().width);
       const barrerTopLeft = document.querySelector(".barreira-top-container").getBoundingClientRect().left;
       const coordenadasBarrerBottomX = document.querySelector(".barreira-bottom-container").getBoundingClientRect().x;
       const coordenadasBarrerBottomY = document.querySelector(".barreira-bottom-container").getBoundingClientRect().y;
       console.log(birdLeft, birdX);

       if (birdTop < (barrerTopHeight + barrerTopTop + 20) && birdLeft > barrerTopLeft && birdLeft < barrerTopLeft + barrerTopWidth ){ 
           clearInterval(fallBird);
       }
   }, 1)
}


function startBarreiras(){
    const b = new parBarreiras("div", "barreiras-container", 1600);
    return document.querySelector("[wm-flappy]").appendChild(b);
}

startBarreiras();
startBarreiras();
birdMovimentation();




