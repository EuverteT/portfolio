import { showTitle, showTechnos, showStars } from "https://euvertet.github.io/portfolio/scripts/functions.js";

const response = await fetch('https://euvertet.github.io/portfolio/data/allTechnos.json');
const technos = await response.json();
let selectedLanguage = localStorage.getItem("language")

if (selectedLanguage == "french") {
    showTitle("Les technologies que j'utilise")
}
if (selectedLanguage == "english") {
    showTitle("The technologies I use")
}
if (selectedLanguage == "spanish") {
    showTitle("Las tecnologias que uso")
}
showTechnos(technos, selectedLanguage)
showStars(technos)
