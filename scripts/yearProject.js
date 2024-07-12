import { showTitle, showProjects } from "https://euvertet.github.io/portfolio/scripts/functions.js";

const usedUrl = window.location.search;
const urlParams = new URLSearchParams(usedUrl);

const urlYear = urlParams.get('year');

const response = await fetch('https://euvertet.github.io/portfolio/data/allProjects.json');
const projects = await response.json();
let selectedLanguage = localStorage.getItem("language")

const resp = await fetch('https://euvertet.github.io/portfolio/data/allTechnos.json');
const techs = await resp.json();

const filteredByYearProjects = projects.filter((x) =>{
    return (x.year == urlYear)
})

showTitle(urlYear)
showProjects(filteredByYearProjects, techs, selectedLanguage)