import { showTitle, showProjects } from "https://euvertet.github.io/portfolio/scripts/functions.js";

const response = await fetch('https://euvertet.github.io/portfolio/data/allProjects.json');
const projects = await response.json();
let selectedLanguage = localStorage.getItem("language")

const resp = await fetch('https://euvertet.github.io/portfolio/data/allTechnos.json');
const techs = await resp.json();

if (selectedLanguage == "french") {
    showTitle("Mes Projets")
}
if (selectedLanguage == "english") {
    showTitle("My Projects")
}
if (selectedLanguage == "spanish") {
    showTitle("Mis Proyectos")
}
showProjects(projects, techs, selectedLanguage)

