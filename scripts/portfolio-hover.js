var portfolioItem = document.querySelectorAll(".portfolio-item");

portfolioItem.forEach(e => {
    if (isMobile) return;
    e.childNodes.item(1).addEventListener("mouseenter", () => {
        e.style.setProperty("color", "rgba(51,51,51,0.6)");
    });
    e.childNodes.item(1).addEventListener("mouseout", () => {
        e.style.setProperty("color", "transparent");
    });
});

