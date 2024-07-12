import { showTitle, showTools, showStars } from "https://euvertet.github.io/portfolio/scripts/functions.js";

const response = await fetch('https://euvertet.github.io/portfolio/data/allTools.json');
const tools = await response.json();
let selectedLanguage = localStorage.getItem("language")

if (selectedLanguage == "french") {
    showTitle("Les outils que j'utilise")
}
if (selectedLanguage == "english") {
    showTitle("The tools I use")
}
if (selectedLanguage == "spanish") {
    showTitle("Las herramientas que uso")
}
showTools(tools, selectedLanguage)
showStars(tools)