function toggleTheme() {
    bodyElement = document.querySelector("body")
    bodyElement.classList.toggle("dark-mode-body");
    headerElement = document.querySelector("header")
    headerElement.classList.toggle("dark-mode-body");
    /**lineElement = document.querySelector("side-bar");
    lineElement.classList.toggle("dark-mode-line");*/
}

buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;
