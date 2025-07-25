const projectCardEffect = () => {
    const cards = document.querySelectorAll(".card");
    const cardContainer = document.getElementById("cardContainer");
    let activeIndex = 1;

    cards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            cards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
            activeIndex = index;
        });
    });

    if (cardContainer) {
        cardContainer.addEventListener("mouseleave", () => {
            cards.forEach((c) => c.classList.remove("active"));
            if (cards.length > 1) {
                cards[1].classList.add("active");
                activeIndex = 1;
            }
        });
    }
};

export default projectCardEffect;
