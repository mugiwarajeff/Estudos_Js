function barreira(elementType, elementClass){
    const elemento = document.createElement(elementType);
    const head = document.createElement(elementType);
    const body = document.createElement(elementType)

    elemento.classList.add(elementClass);
    head.classList.add("barreira-head")
    body.classList.add("barreira-body")

    elemento.appendChild(body);
    elemento.appendChild(head);
    return elemento;
}

function parBarreiras(elementType, elementClass, initialPosition){
    const barreiraTop = new barreira("div", "barreira-top-container");
    const barreiraBottom = new barreira("div", "barreira-bottom-container");
    let currentPosition = initialPosition;

    const barreirasContainer = document.createElement(elementType);
    barreirasContainer.classList.add(elementClass);
    //barreirasContainer.style.left = currentPosition;

    barreirasContainer.appendChild(barreiraTop);
    barreirasContainer.appendChild(barreiraBottom);

    function moveParBarreira(){
        console.log(currentPosition)
        currentPosition -= 1;
        barreirasContainer.style.left = `${currentPosition}px`;
    }
    setInterval(() => {
        moveParBarreira()
    }, 1);
    return barreirasContainer;
}

const b1 = new parBarreiras("div", "barreiras-container", 1500);
const b2 = new parBarreiras("div", "barreiras-container", 1100);
document.querySelector("[wm-flappy]").appendChild(b1);
document.querySelector("[wm-flappy]").appendChild(b2);

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



