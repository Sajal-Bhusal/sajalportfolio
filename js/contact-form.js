const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Opening email client...");
    });
});
