const root = document.querySelector(":root");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//Função acionada quando o mouse se move sobre um elemento img
document.querySelector("img").addEventListener("mousemove", (e) => {
    if (isMobile) return;
    let currentTarget = e.currentTarget;
    let targetPosition = {
        "x": currentTarget.offsetLeft,
        "y": currentTarget.offsetTop
    };
    let targetSize = {
        "width": currentTarget.width,
        "height": currentTarget.height
    };
    console.log(e.pageY)
    let targetCenterPositon = {
        "x": (targetPosition.x + (targetSize.width / 2)),
        "y": (targetPosition.y + (targetSize.height / 2))
        };
    let mouseRelativeImageCenter = {
        "x": targetCenterPositon.x - e.pageX,
        "y": targetCenterPositon.y - e.pageY
    }



    //A rotação x move o eixo vertical e já a y move a horizontal
    let rotateX = Math.round((((mouseRelativeImageCenter.y*100.10)/targetSize.height)/3));
    let rotateY = Math.round((((mouseRelativeImageCenter.x*100.10)/targetSize.width)/3*-1 ));
    let brightness = Clamp((100+(rotateX*1.5)), 80, 105);
    //Atualiza as propriedades
    root.style.setProperty("--image-rotate", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    root.style.setProperty("--image-brightness", `brightness(${brightness}%)`);
    root.style.setProperty("--image-box-shadow", `${rotateY * -1}px ${rotateX}px`);
});

//Função para manter o número em um range
function Clamp(value, min, max) {
    return Math.max(Math.min(value, max),min);
}

