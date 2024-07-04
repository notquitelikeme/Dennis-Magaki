const translations = {
    English: {
        greeting: "Hi, I'm Dennis",
        title: "Junior Developer",
        welcome: "Welcome to my web development portfolio",
        description: "I specialise in web design with responsive modern design,<br>Working with the latest technologies and development tools.",
        nav: ["Home", "Technical Skills", "My Projects", "Services", "Contact Me"],
        secttech: "Technical Skills",
        secttech1: "Back-end",
        secttech2: "Front-end",
        secttech3: "Databases",
        secttech4: "Version Control",
        secttech5: "Deployment",
        skill1: "Some experience with NodeJS",
        skill2: "Some experience with BootstrapCSS",
        skill3: "Some experience with React"
    },
    Swahili: {
        greeting: "Jambo, ninaitwa Dennis",
        title: "Msanidi Mdogo",
        welcome: "Karibu kwenye tovuti langu la usanidi",
        description: "Nina utaalamu wa muundo wa wavuti na muundo wa kisasa unaotajika,<br>Ninafanya kazi na teknolojia za kisasa na zana za maendeleo.",
        nav: ["Mwanzo", "Ujuzi wa Kiufundi", "Miradi Yangu", "Huduma", "Wasiliana Nami"],
        secttech: "Ujuzi wa Kiufundi",
        secttech1: "Ujenzinyuma",
        secttech2: "Ujenzimbele",
        secttech3: "Hifadhidata",
        secttech4: "Udhibiti Toleo",
        secttech5: "Usambazaji",
        skill1: "Tajriba kiasi kwenye NodeJS",
        skill2: "Tajriba kiasi kwenye BootstrapCSS",
        skill3: "Tajriba kiasi kwenye React"
    },
    German: {
        greeting: "Hallo, ich heiße Dennis",
        title: "Junior Entwickler",
        welcome: "Willkommen in meinem Webentwicklungsportfolio",
        description: "Ich spezialisiere mich auf Webdesign mit responsivem modernen Design,<br>Arbeiten mit den neuesten Technologien und Entwicklungstools.",
        nav: ["Heim", "Technische Fähigkeiten", "Meine Projekte", "Dienstleistungen", "Kontaktieren Sie mich"],
        secttech: "Technische Fähigkeiten",
        secttech1: "Backend",
        secttech2: "Frontend",
        secttech3: "Datenbank",
        secttech4: "Versionskontrolle",
        secttech5: "Einsatz",
        skill1: "Einige Erfahrung mit NodeJS",
        skill2: "Einige Erfahrung mit BootstrapCSS",
        skill3: "Einige Erfahrung mit React"
    }
};

document.querySelector('.custom-select-wrapper').addEventListener('click', function (e) {
    const select = this.querySelector('.custom-select');
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    } else {
        select.classList.toggle('open');
    }
});

document.querySelectorAll('.custom-option').forEach(option => {
    option.addEventListener('click', function () {
        const select = this.closest('.custom-select');
        const selectTrigger = select.querySelector('.custom-select-trigger span');
        const selectImg = select.querySelector('.custom-select-trigger img');
        const selectedLanguage = this.getAttribute('data-value');

        selectTrigger.textContent = this.textContent.trim();
        selectImg.src = this.querySelector('img').src;
        selectImg.alt = this.querySelector('img').alt;
        select.classList.remove('open');

        // Update text content
        document.getElementById('greeting').innerHTML = translations[selectedLanguage].greeting;
        document.getElementById('title').innerHTML = translations[selectedLanguage].title;
        document.getElementById('welcome').innerHTML = translations[selectedLanguage].welcome;
        document.getElementById('description').innerHTML = translations[selectedLanguage].description;
        document.getElementById('secttech').innerHTML = translations[selectedLanguage].secttech;
        document.getElementById('secttech1').innerHTML = translations[selectedLanguage].secttech1;
        document.getElementById('secttech2').innerHTML = translations[selectedLanguage].secttech2;
        document.getElementById('secttech3').innerHTML = translations[selectedLanguage].secttech3;
        document.getElementById('secttech4').innerHTML = translations[selectedLanguage].secttech4;
        document.getElementById('secttech5').innerHTML = translations[selectedLanguage].secttech5;
        document.getElementById('skill1').innerHTML = translations[selectedLanguage].skill1;
        document.getElementById('skill2').innerHTML = translations[selectedLanguage].skill2;
        document.getElementById('skill3').innerHTML = translations[selectedLanguage].skill3;

        // Update nav links
        const navItems = document.querySelectorAll('#nav li a');
        navItems.forEach((item, index) => {
            item.innerHTML = translations[selectedLanguage].nav[index];
        });
    });
});

window.addEventListener('click', function (e) {
    const customSelect = document.querySelector('.custom-select');
    if (!customSelect.contains(e.target)) {
        customSelect.classList.remove('open');
    }
});

window.onscroll = function () { makeNavbarSticky() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeNavbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
