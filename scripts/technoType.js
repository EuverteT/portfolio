import { showTitle, showTechnos, showStars } from "https://euvertet.github.io/portfolio/scripts/functions.js";

/*  Récupération de l'URL correspondant au type de technologie séléctionnée */

const usedUrl = window.location.search;
const urlParams = new URLSearchParams(usedUrl);

/* Récupération du nom dans l'URL de ce type */

const urlTypeName = urlParams.get('name');

const response = await fetch('https://euvertet.github.io/portfolio/data/allTechnos.json');
const technos = await response.json();

let selectedLanguage = localStorage.getItem("language")
let filteredTechnos = []
let title = "french"

filteredTechnos = technos.filter((x) => {
    return (x.enType == urlTypeName)
})

switch (selectedLanguage) {
    case "french":
        title = filteredTechnos[0].frType
        break
    case "english":
        title = filteredTechnos[0].enType
        break
    case "spanish":
        title = filteredTechnos[0].esType
        break
}

showTitle(title)
showTechnos(filteredTechnos, selectedLanguage)
showStars(filteredTechnos)