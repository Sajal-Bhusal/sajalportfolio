const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach((card) => {
            const cardCategory = card.dataset.category;
            const shouldDisplay =
                selectedFilter === "all" ||
                selectedFilter === cardCategory;

            if (shouldDisplay) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
