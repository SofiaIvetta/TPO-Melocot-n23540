document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button[botton]");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = button.getAttribute("botton");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});