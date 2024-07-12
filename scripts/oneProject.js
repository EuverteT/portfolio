import { createTechnoLink, previousNextNavigation } from "https://euvertet.github.io/portfolio/scripts/functions.js";

const usedUrl = window.location.search;
const urlParams = new URLSearchParams(usedUrl);

const urlProjectName = urlParams.get('name')

const response = await fetch('https://euvertet.github.io/portfolio/data/allProjects.json');
const projects = await response.json();

const resp = await fetch('https://euvertet.github.io/portfolio/data/allTechnos.json');
const techs = await resp.json();

let displayOne = document.querySelector(".displayOne")
let selectedLanguage = localStorage.getItem("language")

//VARIABLES POUR CHANGEMENT DE LANGUE
let displayTechnologiesTitle = ""
let displayGaleryTitle = ""
let displayDownloadButton = ""
let displayOpenPdfButton = ""
let displayOpenWebsite = ""
let displayWarningP6P7 = ""
let yesResponse = ""
let noResponse = ""


for (let project of projects) {
    if (urlProjectName == project.name) {

        let displayLongDescription = project.longFrDescription

        switch (selectedLanguage) {
            case "french":
                displayLongDescription = project.longFrDescription
                displayTechnologiesTitle = "Technologies"
                displayGaleryTitle = "Galerie"
                displayDownloadButton = "Télécharger le projet au format ZIP"
                displayOpenPdfButton = "Ouvrir en version PDF (nouvel onglet)"
                displayOpenWebsite = "Accéder au site"
                displayWarningP6P7 = "Vous pouvez télécharger le dossier de l'application mais il est déconseillé de l'utiliser car datant de plusieurs années, il contient certaines failles de sécurité qui n'ont pas été résolues. Une résolution potentielle est faisable avec \"npm audit fix\" mais il y a des \"breaking changes\" qui n'ont pas été testées. Souhaitez-vous toujours poursuivre le téléchargement? "
                yesResponse = "OUI"
                noResponse = "NON"
                break
            case "english":
                displayLongDescription = project.longEnDescription
                displayTechnologiesTitle = "Technologies"
                displayGaleryTitle = "Gallery"
                displayDownloadButton = "Download ZIP project"
                displayOpenPdfButton = "Open PDF project (new tab)"
                displayOpenWebsite = "Go to website"
                displayWarningP6P7 = "You can download the application file but it is not recommended to use it because it is several years old and contains some security vulnerabilities that have not been resolved. A potential resolution is feasible with \"npm audit fix\" but there are \"breaking changes\" that have not been tested. Do you still want to continue downloading?"
                yesResponse = "YES"
                noResponse = "NO"
                break
            case "spanish":
                displayLongDescription = project.longEsDescription
                displayTechnologiesTitle = "Tecnologias"
                displayGaleryTitle = "Galería"
                displayDownloadButton = "Descarga el proyecto en formato ZIP"
                displayOpenPdfButton = "Abrir en versión PDF (nueva pestaña)"
                displayOpenWebsite = "Accede al sitio web"
                displayWarningP6P7 = "Puede descargar el archivo de la aplicación, pero no se recomienda utilizarlo porque tiene varios años y contiene algunas vulnerabilidades de seguridad que no se han resuelto. Una posible resolución es factible con \"npm audit fix\", pero hay \"cambios importantes\" que no se han probado. ¿Aún quieres continuar descargando?"
                yesResponse = "Sí"
                noResponse = "No"
                break
        }

        //nom + année
        let nameAndYear = document.createElement("h2")
        nameAndYear.innerText = (project.name + " (" + project.year + ")")
        //image
        let image = document.createElement("img")
        image.setAttribute("src", project.image)
        image.setAttribute("alt", project.alt)
        image.setAttribute("class", "displayOneLogo")
        //description longue
        let longDescription = document.createElement("p")
        longDescription.setAttribute("class", "longDescription")
        longDescription.innerText = displayLongDescription

        if (project.deadline) {
            longDescription.setAttribute("class", "longDescription deadline")
            longDescription.style.textAlign = "center"
        }

        displayOne.appendChild(nameAndYear)
        displayOne.appendChild(image)
        displayOne.appendChild(longDescription)

        //Titre
        let technoTitle = document.createElement("h2")
        technoTitle.innerText = displayTechnologiesTitle

        displayOne.appendChild(technoTitle)

        createTechnoLink(project, displayOne, techs)

        // Affichage d'une galerie si des captures sont présentes

        if (project.galeryImages) {

            let galery = document.createElement("h2")
            displayOne.appendChild(galery)

            let galeryName = document.createElement("div")
            galeryName.innerText = displayGaleryTitle
            galery.appendChild(galeryName)

            let expandButton = document.createElement("button")
            expandButton.setAttribute("id", "expandButton")
            expandButton.setAttribute("class", "expandNotExpandButton")
            expandButton.innerText = "\u2193"
            galery.appendChild(expandButton)

            let notExpandButton = document.createElement("button")
            notExpandButton.setAttribute("id", "notExpandButton")
            notExpandButton.setAttribute("class", "expandNotExpandButton")
            notExpandButton.innerText = "\u2191"
            notExpandButton.style.display = "none"
            galery.appendChild(notExpandButton)

            let galeryImageContainer = document.createElement("div")
            displayOne.appendChild(galeryImageContainer)
            galeryImageContainer.setAttribute("class", "galeryImageContainer")

            let closeButtonContainer = document.createElement("div")
            closeButtonContainer.setAttribute("class", "closeButtonContainer")
            let closeButton = document.createElement("button")
            closeButton.innerText = "\xD7"
            closeButton.setAttribute("class", "expandNotExpandButton")
            closeButton.setAttribute("id", "closeButton")
            closeButton.style.display = "none"

            document.getElementById("expandButton").onclick = () => {

                galeryImageContainer.style.display = "flex"
                expandButton.style.display = "none"
                notExpandButton.style.display = "block"
                closeButton.style.display = "block"

            }
            document.getElementById("notExpandButton").onclick = () => {
                galeryImageContainer.style.display = "none"
                expandButton.style.display = "block"
                notExpandButton.style.display = "none"
                closeButton.style.display = "none"
            }

            for (let i = 0; i < project.galeryImages.length; i++) {
                let img = document.createElement("img")
                img.setAttribute("class", "galeryImage")
                img.setAttribute("src", "https://euvertet.github.io/portfolio/data/" + project.galeryImages[i])
                galeryImageContainer.appendChild(img)
            }

            // Placement du bouton CLOSE pour masquer la galerie d'image
            galeryImageContainer.appendChild(closeButtonContainer)
            closeButtonContainer.appendChild(closeButton)

            document.getElementById("closeButton").onclick = () => {
                galeryImageContainer.style.display = "none"
                expandButton.style.display = "block"
                notExpandButton.style.display = "none"
                closeButton.style.display = "none"
            }        
        }
 
            let openOrDownloadBlock = document.createElement("p")
            openOrDownloadBlock.setAttribute("class", "openOrDownloadBlock")          

            let openCodeLink = document.createElement("a")
            openCodeLink.setAttribute("href", project.file)
            openCodeLink.setAttribute("target", "_blank")
            openCodeLink.setAttribute("class", "openOrDownloadLink")
            openCodeLink.innerText = displayOpenPdfButton

            displayOne.appendChild(openOrDownloadBlock)
            openOrDownloadBlock.appendChild(openCodeLink)

            if (project.deadline) {
                openOrDownloadBlock.style.display = 'none'
            }


            // Affichage d'un lien externe supplémentaire si le site est ONLINE
            if (project.online) {
                let websiteLink = document.createElement("a")
                websiteLink.setAttribute("href", project.onlineLink)
                websiteLink.setAttribute("target", "_blank")
                websiteLink.setAttribute("class", "openOrDownloadLink")
                websiteLink.innerText = displayOpenWebsite
                openOrDownloadBlock.appendChild(websiteLink)
            }

            previousNextNavigation(project, projects)
        }
    }

    