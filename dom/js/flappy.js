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
    setInterval(() => {
        moveParBarreira()
    }, 1);
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
       const birdRigth = bird.getBoundingClientRect().right;
       const birdTop = bird.getBoundingClientRect().top;
       const birdY = bird.getBoundingClientRect().y;
       const birdX = bird.getBoundingClientRect().x;
       const coordenadasGerais = document.querySelector(".barreira-top-container").getBoundingClientRect();
       const barrerTopRight = document.querySelector(".barreira-top-container").getBoundingClientRect().right;
       const barrerTopHeight = document.querySelector(".barreira-top-container").getBoundingClientRect().height;
       const barrerTopY = document.querySelector(".barreira-top-container").getBoundingClientRect().y;
       const barrerTopX = document.querySelector(".barreira-top-container").getBoundingClientRect().x;
       const coordenadasBarrerBottomX = document.querySelector(".barreira-bottom-container").getBoundingClientRect().x;
       const coordenadasBarrerBottomY = document.querySelector(".barreira-bottom-container").getBoundingClientRect().y;
       console.log(barrerTopHeight.toFixed(0));
       console.log(birdY);

       if ( birdY < barrerTopHeight.toFixed(0)){ //birdX == barrerTopX && continuar daqui
           clearInterval(fallBird)
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




