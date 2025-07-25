export default function initHamburgerMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuIcon = document.getElementById("menu-icon");

    menuToggle.addEventListener("click", () => {
        const menu = document.querySelector(".menu");
        if (menu) {
            menu.classList.toggle("hidden");
        }

        if (menuIcon.dataset.state === "hamburger") {
            // Change to cross icon
            menuIcon.src =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO2UYQrCMAxG3/Gc9AbB3cgjuKspK/MYVoQUSiiFNRYUFsiPpuV7kHwpHLEzzkAEUmdGYGoBPOJJc20B8qPQmUnztwALIBWxT+3qBSx6fhiIaO1lILsBAtwLh8yV2sXbIikEt8JpVtw1ZFH75ftnRdwNiAYwfwsgOtDcotXMxAWQQjz3vDb4bsBttE2DQoYtWvi7vyiO/q4ns1CpQ/zUAhyBjTdMutL3ykLJVQAAAABJRU5ErkJggg==";
            menuIcon.dataset.state = "cross";
        } else {
            // Change to hamburger icon
            menuIcon.src =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACN0lEQVR4nO2YPU8VQRSGHxGRzxY6hYRSC/kN1gYLjD+BiuAHgXvR29gbKmMsjJWdUREhCsZECwkqkKAmQuwEwWhLdeGYSQ7JZAMyM3v37hD2Td7uzp7n3ZndPedCoUKFjq3OA9eBl8AXYAvYAeQQ7+hvzZop4Bpwrp7gF4EPDqC+XgQGgBNZgXcCsxmAS8KvtVZN1Qes1wFe1KbWhVrB9wC/6ggv6t9Ab1r4JuDrIYVKQBtQziDECnAqTYBhhyLt+tuOjHZiKBS+FfjrUKCsIcYz2pU/QEtIgP4URWu9K5dCAjxKUXC/XUnjhyEBljI60yH+FBJgMwJwUW+EBNiOAFzUhsVLZ4BqBOBiNYDdPgHuWItnyE/TFodhctaytfAy+ak/0a06a81aWAFuABPAE2Ae+AF8B15oC3wysb4LGAQeA6+AB/oub9xnprgLLOg157XGhNasWBymnrPuB/QsY/oFfvuf52ddgc0QMwnsetS45xOgUxPn/fCKdfe9Z4T2CMBFbVqSIEkkDtaRDdAMjEQALuqbyuQk03u/iQBaEp5zDVGKAFYO8KhLgG/WgpLOxXmpKTHVmfncqwvdm6zyVIdvV7pqLShHsAPjvu3E7QjOuhzgWy4BTgPvI4CVhN8pm5OaIxtoqj7fgT1tRAAu6p8EaDICcFE/DQlwNQJwUV8JCdAAfI4AfkFZgv9a38oRfhM4Gwpvh/iY053vpkZq0Gfiuc61Wbxiq3rtZ3rmg49NoUKFODr6B7MLQ6exeSD6AAAAAElFTkSuQmCC";
            menuIcon.dataset.state = "hamburger";
        }
    });
}