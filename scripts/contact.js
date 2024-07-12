const response = await fetch('https://euvertet.github.io/portfolio/data/contact.json');
const datas = await response.json();
let selectedLanguage = localStorage.getItem("language")

for (let data of datas) {

    if (data.name == selectedLanguage) {

        let contact = document.getElementById("contact")
        let contactTitle = document.createElement("h1")
        contactTitle.innerText = data.Title

        let mailSectionTitle = document.createElement("h2")
        mailSectionTitle.innerText = data.mailTitle
        let mail = document.createElement("p")
        mail.innerText = "thomaseuverte@gmail.com"

        let linkedinSectionTitle = document.createElement("h2")
        linkedinSectionTitle.innerText = data.linkedinTitle
        let linkedin = document.createElement("div")
        linkedin.innerText = "https://fr.linkedin.com/in/thomaseuverte/"

        contact.appendChild(contactTitle)
        contact.appendChild(mailSectionTitle)
        contact.appendChild(mail)
        contact.appendChild(linkedinSectionTitle)
        contact.appendChild(linkedin)

    }
}