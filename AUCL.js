document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/Moh-Rezaee/AUCL/refs/heads/main/index.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content-area").innerHTML = data;
        })
        .catch(error => console.error("Error loading content:", error));
});
