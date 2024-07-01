const translations = {
    English: {
        greeting: "Hi, I'm Dennis",
        title: "Junior Developer",
        welcome: "Welcome to my web development portfolio",
        description: "I specialise in web design with responsive modern design,<br>Working with the latest technologies and development tools.",
        nav: ["Home", "My Projects", "Technical Skills", "Services", "Contact Me"]
    },
    Swahili: {
        greeting: "Jambo, mimi ni Dennis",
        title: "Msanidi Mdogo",
        welcome: "Karibu kwenye tovuti langu la usanidi",
        description: "Nina utaalamu wa muundo wa wavuti na muundo wa kisasa unaotajika,<br>Ninafanya kazi na teknolojia za kisasa na zana za maendeleo.",
        nav: ["Mwanzo", "Miradi Yangu", "Ujuzi wa Kiufundi", "Huduma", "Wasiliana Nami"]
    },
    German: {
        greeting: "Hallo, ich bin Dennis",
        title: "Junior Entwickler",
        welcome: "Willkommen in meinem Webentwicklungsportfolio",
        description: "Ich spezialisiere mich auf Webdesign mit responsivem modernen Design,<br>Arbeiten mit den neuesten Technologien und Entwicklungstools.",
        nav: ["Heim", "Meine Projekte", "Technische Fähigkeiten", "Dienstleistungen", "Kontaktieren Sie mich"]
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
