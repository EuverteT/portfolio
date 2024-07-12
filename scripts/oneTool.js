import { previousNextNavigation } from "https://euvertet.github.io/portfolio/scripts/functions.js";


const usedUrl = window.location.search;
const urlParams = new URLSearchParams(usedUrl);
const urlName = urlParams.get('name');

const response = await fetch('https://euvertet.github.io/portfolio/data/allTools.json');
const tools = await response.json();

// Variables par rapport au changement de langue
let selectedLanguage = localStorage.getItem("language")
let displayTypeTitle = "Type"
let displayType = "french"
let displayOfficialPage = "Page officielle"
let displayCoursePage = "Page de cours"


for (let tool of tools) {

    if (urlName == tool.name) {

        switch (selectedLanguage) {
            case "french":
                displayTypeTitle = "Type"
                displayType = tool.frType
                displayOfficialPage = "Page Officielle"
                displayCoursePage = "Page de cours"
                break
            case "english":
                displayTypeTitle = "Type"
                displayType = tool.enType
                displayOfficialPage = "Official page"
                displayCoursePage = "Course page"
                break
            case "spanish":
                displayTypeTitle = "Tipo"
                displayType = tool.esType
                displayOfficialPage = "Página oficia"
                displayCoursePage = "Página del curso"
                break
        }

        let oneTool = document.querySelector(".displayOne")
        // Nom
        let name = document.createElement("h2")
        name.innerText = tool.name
        // Logo
        let img = document.createElement("img")
        img.setAttribute("class", "displayOneLogo")
        img.setAttribute("src", tool.logo)
        img.setAttribute("alt", tool.alt)
        //Type
        let type = document.createElement("h2")
        type.innerText = displayTypeTitle
        let urlPart = document.createElement("p")
        let url = document.createElement("a")
        url.setAttribute("href", "https://euvertet.github.io/portfolio/pages/allTools.html")
        url.innerText = displayType
        //Page Officielle
        let officialPage = document.createElement("h2")
        officialPage.innerText = displayOfficialPage
        let officialPageUrl = document.createElement("a")
        officialPageUrl.setAttribute("href", tool.officialPage)
        officialPageUrl.setAttribute("target", "_blank")
        officialPageUrl.innerText = tool.officialPage
        //Page de cours
        let coursePage = document.createElement("h2")
        coursePage.innerText = displayCoursePage
        let coursePageUrl = document.createElement("a")
        coursePageUrl.setAttribute("href", tool.courseFile)
        coursePageUrl.setAttribute("target", "_blank")
        coursePageUrl.setAttribute("class", "openOrDownloadLink")
        coursePageUrl.innerText = "Ouvrir le PDF (nouvel onglet, french only)"

        oneTool.appendChild(name)
        oneTool.appendChild(img)
        oneTool.appendChild(type)
        oneTool.appendChild(urlPart)
        urlPart.appendChild(url)
        oneTool.appendChild(officialPage)
        oneTool.appendChild(officialPageUrl)
        oneTool.appendChild(coursePage)
        oneTool.appendChild(coursePageUrl)

        previousNextNavigation(tool, tools)
    }
}