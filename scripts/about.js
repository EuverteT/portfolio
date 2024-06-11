const response = await fetch('https://euvertet.github.io/portfolio/data/about.json');
const datas = await response.json();
let selectedLanguage = localStorage.getItem("language")

for (let data of datas) {

    if (data.name == selectedLanguage) {

        let about = document.getElementById("about")
        let whoSectionTitle = document.createElement("h1")
        whoSectionTitle.innerText = data.whoTitle
        let whoSection = document.createElement("p")
        whoSection.innerText = data.who
        let livingSectionTitle = document.createElement("h2")
        livingSectionTitle.innerText = data.livingTitle
        let livingSection = document.createElement("p")
        livingSection.innerText = "Le Mans"
        let mobilitySectionTitle = document.createElement("h2")
        mobilitySectionTitle.innerText = data.mobilityTitle
        let mobilitySection = document.createElement("p")
        mobilitySection.innerText = "Pays de la Loire, Occitanie, Provence-Alpes Côte d'Azur"
        
        about.appendChild(whoSectionTitle)
        about.appendChild(whoSection)
        about.appendChild(livingSectionTitle)
        about.appendChild(livingSection)
        about.appendChild(mobilitySectionTitle)
        about.appendChild(mobilitySection)

    }
}