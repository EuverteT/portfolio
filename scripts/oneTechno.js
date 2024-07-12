import { showProjects, previousNextNavigation } from "https://euvertet.github.io/portfolio/scripts/functions.js";

/*  Récupération de l'URL correspondant à la technologie séléctionnée */
const usedUrl = window.location.search;
const urlParams = new URLSearchParams(usedUrl);

/* Récupération du nom dans l'URL de cette technologie */

const urlName = urlParams.get('name');

const response = await fetch('https://euvertet.github.io/portfolio/data/allTechnos.json');
const technos = await response.json();

const resp = await fetch('https://euvertet.github.io/portfolio/data/allTechnos.json');
const techs = await resp.json();

// Variables par rapport au changement de langue
let selectedLanguage = localStorage.getItem("language")
let displayTypeTitle = "Type"
let displayType = "french"
let displayOfficialPage = "Page officielle"
let displayCoursePage = "Page de cours"
let displayProjectsTitle = "Mes projets qui l'utilisent"

// Affichage de base pour cette technologie dont on trouve le nom avec l'URL

for (let techno of technos) {

    if (urlName == techno.name) {

        switch (selectedLanguage) {
            case "french":
                displayTypeTitle = "Type"
                displayType = techno.frType
                displayOfficialPage = "Page Officielle"
                displayCoursePage = "Page de cours"
                displayProjectsTitle = "Mes projets qui l'utilisent"
                break
            case "english":
                displayTypeTitle = "Type"
                displayType = techno.enType
                displayOfficialPage = "Official page"
                displayCoursePage = "Course page"
                displayProjectsTitle = "My projects that use it"
                break
            case "spanish":
                displayTypeTitle = "Tipo"
                displayType = techno.esType
                displayOfficialPage = "Página oficia"
                displayCoursePage = "Página del curso"
                displayProjectsTitle = "Mis proyectos que lo usan"
                break
        }

        let oneTechno = document.querySelector(".displayOne")
        // Nom
        let name = document.createElement("h2")
        name.innerText = techno.name
        // Logo
        let img = document.createElement("img")
        img.setAttribute("class", "displayOneLogo")
        img.setAttribute("src", techno.logo)
        img.setAttribute("alt", techno.alt)
        //Type
        let type = document.createElement("h2")
        type.innerText = displayTypeTitle
        let urlPart = document.createElement("p")
        let url = document.createElement("a")
        url.setAttribute("href", "https://euvertet.github.io/portfolio/pages/technoType.html?name=" + techno.enType)
        url.innerText = displayType
        //Page Officielle
        let officialPage = document.createElement("h2")
        officialPage.innerText = displayOfficialPage
        let officialPageUrlPart = document.createElement("p")
        let officialPageUrl = document.createElement("a")
        officialPageUrl.setAttribute("href", techno.officialPage)
        officialPageUrl.setAttribute("target", "_blank")
        officialPageUrl.innerText = techno.officialPage
        //Page de cours
        let coursePage = document.createElement("h2")
        coursePage.innerText = displayCoursePage
        let coursePageUrl = document.createElement("a")
        coursePageUrl.setAttribute("href", techno.courseFile)
        coursePageUrl.setAttribute("target", "_blank")
        coursePageUrl.setAttribute("class", "openOrDownloadLink")
        coursePageUrl.innerText = "Ouvrir le PDF (nouvel onglet, french only)"
        //Projets utilisant cette tech
        let projectsTitle = document.createElement("h2")
        projectsTitle.innerText = displayProjectsTitle
        let section = document.createElement("section")
        section.setAttribute("class", "projects")

        oneTechno.appendChild(name)
        oneTechno.appendChild(img)
        oneTechno.appendChild(type)
        oneTechno.appendChild(urlPart)
        urlPart.appendChild(url)
        oneTechno.appendChild(officialPage)
        oneTechno.appendChild(officialPageUrlPart)
        officialPageUrlPart.appendChild(officialPageUrl)        
        oneTechno.appendChild(coursePage)
        oneTechno.appendChild(coursePageUrl)
        oneTechno.appendChild(projectsTitle)
        oneTechno.appendChild(section)
        
        previousNextNavigation(techno, technos)

    }
}

const projResponse = await fetch('https://euvertet.github.io/portfolio/data/allProjects.json');
const projects = await projResponse.json();

// Itération sur tous les projets pour vérifier ceux qui utilisent la techno
// et push des résultats correspondants vers un nouveau tableau

const projectsWithThisTechno = []

for (let project of projects) {

    for (let techno of project.technologie) {
        if (techno == urlName) {
            projectsWithThisTechno.push(project)
        }
    }
}

// On affiche ensuite les résultats dans la partie correspondante (section avec class projects)
showProjects(projectsWithThisTechno, techs, selectedLanguage)





