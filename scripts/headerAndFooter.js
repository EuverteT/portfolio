//**        VARIABLES       **//
///////////////////////////////
const usedUrl = window.location.href
let frenchButton = document.getElementById("FR")
let englishButton = document.getElementById("EN")
let spanishButton = document.getElementById("ES")
let selectedLanguage = localStorage.getItem("language")

//**        FONCTIONS       **//
///////////////////////////////

//POUR LA GESTION DE LA BORDURE PERMETTANT DE VOIR SUR QUELLE PAGE ON EST
function checkNav() {
    if (usedUrl == "https://euvertet.github.io/portfolio/pages/allProjects.html") {
        document.querySelector(".headerProjectsLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl.match("oneProject")) {
        document.querySelector(".headerProjectsLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl.match("yearProject")) {
        document.querySelector(".headerProjectsLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl == "https://euvertet.github.io/portfolio/pages/allTechnos.html") {
        document.querySelector(".headerTechnosLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl.match("oneTechno")) {
        document.querySelector(".headerTechnosLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl.match("technoType")) {
        document.querySelector(".headerTechnosLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl == "https://euvertet.github.io/portfolio/pages/allTools.html") {
        document.querySelector(".headerToolsLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl.match("oneTool")) {
        document.querySelector(".headerToolsLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl == "https://euvertet.github.io/portfolio/index.html") {
        document.querySelector(".headerHomeLink").style.borderBottom = "1px solid white"
    }
    if (usedUrl == "https://euvertet.github.io/portfolio/pages/about.html") {
        document.querySelector(".about").style.borderTop = "1px solid white"
    }
    if (usedUrl == "https://euvertet.github.io/portfolio/pages/contact.html") {
        document.querySelector(".contact").style.borderTop = "1px solid white"
    }

}

//POUR LES DRAPEAUX DE LANGUES
function twoButtonShow(firstButton, secondButton) {
    firstButton.style.display = 'block'
    secondButton.style.display = 'block'
}
function twoButtonHide(firstButton, secondButton) {
    firstButton.style.display = 'none'
    secondButton.style.display = 'none'
}
function oneButtonShowTwoButtonHide(firstButton, secondButton, thirdButton) {
    firstButton.style.display = 'block'
    secondButton.style.display = 'none'
    thirdButton.style.display = 'none'
}

//POUR LE CONTROLE DE LA LANGUE ACTUELLE
function checkLang() {
    if (localStorage.getItem("language") == null) {
        let selectedLanguage = "french"
        localStorage.setItem("language", selectedLanguage)
        headerAndFooterInFrench()
        twoButtonHide(englishButton, spanishButton)
    }
    if (localStorage.getItem("language") == "french") {
        headerAndFooterInFrench()
        twoButtonHide(englishButton, spanishButton)
    }
    if (localStorage.getItem("language") == "english") {
        headerAndFooterInEnglish()
        twoButtonHide(frenchButton, spanishButton)
    }
    if (localStorage.getItem("language") == "spanish") {
        headerAndFooterInSpanish()
        twoButtonHide(frenchButton, englishButton)
    }
}

//CHANGEMENT DE LANGUE
function headerAndFooterInFrench() {

    // Header
    let home = document.querySelector(".headerHomeLink")
    home.innerText = "Accueil"

    let projects = document.querySelector(".headerProjectsLink")
    projects.innerText = "Projets"

    let technos = document.querySelector(".headerTechnosLink")
    technos.innerText = "Technologies"

    let tools = document.querySelector(".headerToolsLink")
    tools.innerText = "Outils"

    //Footer
    let jobname = document.querySelector(".jobname")
    jobname.innerText = "Développeur Full-Stack"

    let contact = document.querySelector(".contact")
    contact.innerText = "Contact"

    let about = document.querySelector(".about")
    about.innerText = "A propos"
}
function headerAndFooterInEnglish() {
    let home = document.querySelector(".headerHomeLink")
    home.innerText = "Home"

    let projects = document.querySelector(".headerProjectsLink")
    projects.innerText = "Projects"

    let technos = document.querySelector(".headerTechnosLink")
    technos.innerText = "Technologies"

    let tools = document.querySelector(".headerToolsLink")
    tools.innerText = "Tools"

    let jobname = document.querySelector(".jobname")
    jobname.innerText = "Full-Stack Developer"

    let contact = document.querySelector(".contact")
    contact.innerText = "Contact"

    let about = document.querySelector(".about")
    about.innerText = "About"

}
function headerAndFooterInSpanish() {
    let home = document.querySelector(".headerHomeLink")
    home.innerText = "Inicio"

    let projects = document.querySelector(".headerProjectsLink")
    projects.innerText = "Proyectos"

    let technos = document.querySelector(".headerTechnosLink")
    technos.innerText = "Tecnologias"

    let tools = document.querySelector(".headerToolsLink")
    tools.innerText = "Herramientas"

    let jobname = document.querySelector(".jobname")
    jobname.innerText = "Desarrollador Full-Stack"

    let contact = document.querySelector(".contact")
    contact.innerText = "Contacto"

    let about = document.querySelector(".about")
    about.innerText = "Acerca"
}

//POUR LE CONTROLE D'UN CHANGEMENT DE LANGUE
function checkLangChange() {
    frenchButton.addEventListener("click", (event) => {
        event.preventDefault();

        if ((selectedLanguage === "french") && (englishButton.style.display == 'none') && (spanishButton.style.display == 'none')) {
            twoButtonShow(englishButton, spanishButton)
            return
        }
        if ((selectedLanguage === "french") && (englishButton.style.display == 'block') && (spanishButton.style.display == 'block')) {
            twoButtonHide(englishButton, spanishButton)
            return
        }
        if (selectedLanguage === "english" || "spanish") {
            selectedLanguage = "french"
            localStorage.setItem("language", selectedLanguage)
            oneButtonShowTwoButtonHide(frenchButton, englishButton, spanishButton)
            headerAndFooterInFrench()
            location.reload()
            return
        }
    })

    englishButton.addEventListener("click", (event) => {
        event.preventDefault();

        if ((selectedLanguage === "english") && (frenchButton.style.display == 'none') && (spanishButton.style.display == 'none')) {
            twoButtonShow(frenchButton, spanishButton)
            return
        }
        if ((selectedLanguage === "english") && (frenchButton.style.display == 'block') && (spanishButton.style.display == 'block')) {
            twoButtonHide(frenchButton, spanishButton)
            return
        }
        if (selectedLanguage === "french" || "spanish") {
            selectedLanguage = "english"
            localStorage.setItem("language", selectedLanguage)
            oneButtonShowTwoButtonHide(englishButton, frenchButton, spanishButton)
            headerAndFooterInEnglish()
            location.reload()
            return
        }
    })

    spanishButton.addEventListener("click", (event) => {
        event.preventDefault();

        if ((selectedLanguage === "spanish") && (frenchButton.style.display == 'none') && (englishButton.style.display == 'none')) {
            twoButtonShow(frenchButton, englishButton)
            return
        }
        if ((selectedLanguage === "spanish") && (frenchButton.style.display == 'block') && (englishButton.style.display == 'block')) {
            twoButtonHide(frenchButton, englishButton)
            return
        }
        if (selectedLanguage === "french" || "english") {
            selectedLanguage = "spanish"
            localStorage.setItem("language", selectedLanguage)
            oneButtonShowTwoButtonHide(spanishButton, frenchButton, englishButton)
            headerAndFooterInSpanish()
            location.reload()
            return
        }
    })
}

checkNav()
checkLang()
checkLangChange()
