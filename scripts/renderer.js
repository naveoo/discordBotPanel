document.addEventListener('DOMContentLoaded', () => {
    fetch("components/header.html")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("afterbegin", html);

            const hamburgerBtn = document.getElementById('hamburger-btn');
            const sidebar = document.getElementById('sidebar');

            hamburgerBtn.addEventListener('click', () => {
                sidebar.classList.toggle('expanded');
            });
        })
        .catch(err => console.error("Erreur lors du chargement du header :", err));
});