const navHighlighter = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-text");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    const href = link.getAttribute("href");
                    if (href && href.substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
};

export default navHighlighter;
