var notification = document.querySelector("#notification");
var form = document.querySelector("#contact-form form");

var animationIn;
var animationOut;
var isAnimating = {
    "in": false,
    "out": false
}

form.addEventListener("submit", async () => {
    clearInterval(animationIn);
    clearInterval(animationOut);
    isAnimating.in = false;
    isAnimating.out = false;

    form.childNodes.item(1).value = null; //input
    
    let currentPosition = -notification.clientHeight;
    let targetPosition = 80;
    let opacity = 0;
    NotificationAnimationIn(currentPosition, targetPosition, opacity);
});

async function NotificationAnimationIn(currentPosition, targetPosition, opacity) {
    if (isAnimating.in || isAnimating.out) return;
    isAnimating.in = true;

    notification.style.setProperty("display", "inherit");
    notification.style.setProperty("opacity", `${opacity}%`);
    notification.style.setProperty("top", `${currentPosition}px`);

    animationIn = setInterval(async () => {
        if (currentPosition > targetPosition && opacity > 100) {
            clearInterval(animationIn);
            if (!isAnimating.out) {
                setTimeout(() => {
                    isAnimating.in = false;
                    NotificationAnimationOut(opacity);
                }, 800); 
            }
            return;
        }
        if (opacity <= 100) notification.style.setProperty("opacity", `${opacity+=3}%`);
        if (currentPosition <= targetPosition) notification.style.setProperty("top", `${currentPosition+=4}px`);
    }, 8);
}

async function NotificationAnimationOut(opacity) {
    isAnimating.out = true;
    animationOut = setInterval(async () => {
        if (opacity <= 0 ) {
            clearInterval(animationOut);
            isAnimating.out = false;
            return;
        }
        notification.style.setProperty("opacity", `${opacity--}%`); 
    }, 8);
}