// AFFICHAGE DES TECHNOS

export function showTechnos(technos, selectedLanguage) {
    for (let techno of technos) {
        //Sélection de la balise globale qui intégrera toutes les cartes de languages
        const techOrToolSection = document.querySelector(".techOrToolSection")

        //Construction de la carte 
        const oneTechno = document.createElement("a")
        let url = "https://euvertet.github.io/portfolio/pages/oneTechno.html?name=" + techno.name
        oneTechno.setAttribute("href", url)
        oneTechno.setAttribute("class", "card")

        //Logo
        const divLogo = document.createElement("div")
        divLogo.setAttribute("class", "divLogo")
        const logo = document.createElement("img")
        logo.src = techno.logo
        logo.alt = techno.alt
        //Nom
        const name = document.createElement("div")
        name.setAttribute("class", "titillium-web-semibold techOrToolName")
        name.innerText = (techno.name)
        //Type
        const type = document.createElement("a")
        let typeUrl = "https://euvertet.github.io/portfolio/pages/technoType.html?name=" + techno.enType
        type.setAttribute("href", typeUrl)
        type.setAttribute("class", "filterLink")

        if (selectedLanguage == "french") {
            type.innerText = (techno.frType)
        }
        if (selectedLanguage == "english") {
            type.innerText = (techno.enType)
        }
        if (selectedLanguage == "spanish") {
            type.innerText = (techno.esType)
        }

        // Partie level avec création de la balise qui sera utilisée pour les étoiles
        const level = document.createElement("p")
        level.setAttribute("id", "starsOfId" + techno.id)
        level.setAttribute("class", "stars")
        level.innerText = ("Niveau")
        if (techno.level < 2) {
            oneTechno.style.border = "solid 1px red"
        }

        techOrToolSection.appendChild(oneTechno)
        oneTechno.appendChild(divLogo)
        divLogo.appendChild(logo)
        oneTechno.appendChild(name)
        oneTechno.appendChild(type)
        oneTechno.appendChild(level)

    }
}

// AFFICHAGE DES OUTILS

export function showTools(tools, selectedLanguage) {
    for (let tool of tools) {
        //Sélection de la balise globale qui intégrera toutes les cartes de languages
        const techOrToolSection = document.querySelector(".techOrToolSection")

        //Construction de la carte 
        const oneTool = document.createElement("a")
        let url = "https://euvertet.github.io/portfolio/pages/oneTool.html?name=" + tool.name
        oneTool.setAttribute("href", url)
        oneTool.setAttribute("class", "card")

        //Logo
        const divLogo = document.createElement("div")
        divLogo.setAttribute("class", "divLogo")
        const logo = document.createElement("img")
        logo.setAttribute("src", tool.logo)
        logo.setAttribute("alt", tool.alt)
        //Nom
        const name = document.createElement("div")
        name.setAttribute("class", "titillium-web-semibold techOrToolName")
        name.innerText = (tool.name)
        //Type
        const type = document.createElement("a")
        let typeUrl = "https://euvertet.github.io/portfolio/pages/allTools.html"
        type.setAttribute("href", typeUrl)
        type.setAttribute("class", "filterLink")

        switch (selectedLanguage) {
            case "french":
                type.innerText = (tool.frType)
                break
            case "english":
                type.innerText = (tool.enType)
                break
            case "spanish":
                type.innerText = (tool.esType)
                break
        }

        // Partie level avec création de la balise qui sera utilisée pour les étoiles
        const level = document.createElement("p")
        level.setAttribute("id", "starsOfId" + tool.id)
        level.setAttribute("class", "stars")
        level.innerText = ("Niveau: ")
        if (tool.level < 2) {
            oneTool.style.border = "solid 1px red"
        }

        techOrToolSection.appendChild(oneTool)
        oneTool.appendChild(divLogo)
        divLogo.appendChild(logo)
        oneTool.appendChild(name)
        oneTool.appendChild(type)
        oneTool.appendChild(level)

    }
}

// AFFICHAGE DES PROJETS

export function showProjects(projects, techs, selectedLanguage) {
    for (let project of projects) {
        //Sélection de la balise globale qui intégrera toutes les cartes des projets
        const projectsSection = document.querySelector(".projects")

        //Construction de la carte 
        const displayOne = document.createElement("a")
        let url = "https://euvertet.github.io/portfolio/pages/oneProject.html?name=" + project.name
        displayOne.setAttribute("href", url)
        displayOne.setAttribute("class", "card")

        //Logo
        const divImage = document.createElement("div")
        divImage.setAttribute("class", "divImage")
        const image = document.createElement("img");
        image.setAttribute ("src", project.image);
        image.setAttribute("alt", "logo du projet")

        //Nom
        const name = document.createElement("p")
        name.setAttribute("class", "titillium-web-semibold")
        name.innerText = project.name

        //Ajout ligne Deadline et modif bordure
        if (project.deadline) {
            const deadline = document.createElement("p")
            deadline.setAttribute("class", "titillium-web-semibold deadline")
            deadline.innerText = project.deadline
            displayOne.appendChild(deadline)
            displayOne.style.border = "solid 1px red"
        }

        //Short Description
        const shortDescription = document.createElement("p");
        let displayShortDescription = project.shortFrDescription

        switch (selectedLanguage) {
            case "french":
                displayShortDescription = project.shortFrDescription
                break
            case "english":
                displayShortDescription = project.shortEnDescription
                break
            case "spanish":
                displayShortDescription = project.shortEsDescription
                break
        }

        shortDescription.innerText = displayShortDescription
        //Année
        const year = document.createElement("a")
        let typeUrl = "https://euvertet.github.io/portfolio/pages/yearProject.html?year=" + project.year
        year.setAttribute("href", typeUrl)
        year.setAttribute("class", "filterLink")
        year.innerText = (project.year);

        // On rattache les élements pour les placer

        projectsSection.appendChild(displayOne)
        displayOne.appendChild(name)
        displayOne.appendChild(divImage)
        divImage.appendChild(image);

        displayOne.appendChild(shortDescription);
        displayOne.appendChild(year)

        // Gestion des liens pour aller vers les pages des technologies correspondantes
        createTechnoLink(project, displayOne, techs)

    }
}

// AFFICHAGE DES TITRES

export function showTitle(text) {
    let sectionTitle = document.getElementById("sectionTitle")
    let title = document.createElement("h1")
    title.innerText = (text)
    sectionTitle.appendChild(title)
}

// GESTION DES LIENS DES TECHNOLOGIES DANS LA CARTE D'UN PROJET

export function createTechnoLink(project, displayOne, techs) {

    const divTechnoLink = document.createElement("div")
    divTechnoLink.setAttribute("class", "divTechnoLink")
    displayOne.appendChild(divTechnoLink)

    for (let tech of techs) {

        for (let i = 0; i < project.technologie.length; i++) {
            if (tech.name == project.technologie[i]) {
                let tecUrl = "https://euvertet.github.io/portfolio/pages/oneTechno.html?name=" + project.technologie[i]
                let link = document.createElement("a")
                link.setAttribute("href", tecUrl)
                link.setAttribute("class", "technoFilterLink")
                let insert = document.createElement("img")
                insert.setAttribute("src", tech.logo)
                insert.setAttribute("class", "thumbnail")
                link.innerText = (project.technologie[i])
                divTechnoLink.appendChild(link)
                link.appendChild(insert)
            }
        }
    }
}

// GESTION DES ETOILES

export function showStars(technos) {
    for (let techno of technos) {
        //Récupération de la balise (avec l'id) créée dans la carte
        const starsOfId = document.getElementById("starsOfId" + techno.id)

        //Boucles pour les étoiles jaunes
        let i = 0
        while (i < techno.level) {
            const yellow = document.createElement("img")          
            yellow.setAttribute("src", techno.yellowStar)
            yellow.setAttribute("class", "star")
            starsOfId.appendChild(yellow)
            i++
        }

        //Boucles pour les étoiles grises
        let j = 0
        let manquant = (5 - techno.level)
        while (j < manquant) {
            const grey = document.createElement("img")
            grey.setAttribute("src", techno.greyStar)
            grey.setAttribute("class", "star")
            starsOfId.appendChild(grey)
            j++
        }
    }
}

// GESTION DES LIENS NEXT ET PREVIOUS (utilisés pour les projets)

export function previousNextNavigation(data, datas) {

    let cutUrl = (window.location.href).split("?")

    let dataIndex = datas.indexOf(data)
    let prevIndex = dataIndex - 1
    let nextIndex = dataIndex + 1
    let previousLink = document.querySelector(".previousNavLink")
    let nextLink = document.querySelector(".nextNavLink")

    if ((prevIndex >= 0) && (nextIndex < datas.length)) {
        previousLink.setAttribute("href", cutUrl[0] + "?name=" + datas[prevIndex].name)
        nextLink.setAttribute("href", cutUrl[0] + "?name=" + datas[nextIndex].name)
    }
    if ((prevIndex < 0) && (nextIndex < datas.length)) {
        previousLink.style.display = 'none'
        nextLink.setAttribute("href", cutUrl[0] + "?name=" + datas[nextIndex].name)
    }
    if (nextIndex > (datas.length - 1)) {
        previousLink.setAttribute("href", cutUrl[0] + "?name=" + datas[prevIndex].name)
        nextLink.style.display = 'none'
    }
}
