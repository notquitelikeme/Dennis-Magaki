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
        skill3: "Some experience with React",
        sectproj: "My Projects",
        ptitle1: "Kicks.Co E-Commerce Website",
        ptitle2: "GitHub Widgets",
        pp1: "This is an E-Commerce website prototype that specializes in selling sneakers, otherwise known as 'Kicks' in slang vocabulary.<br><br>FrontEnd: HTML, CSS, JS <br>BackEnd: JS, Firestore Firebase",
        pp2: "This is an unofficial GitHub Widget Service that allows one to embed their GitHub Profile and GitHub Repositories information on their sites.<br><br>FrontEnd: HTML, CSS, JS <br>BackEnd: JS</p>",
        link1a: "<i class='fa-solid fa-tower-broadcast'></i> Live Site",
        link1b: "<i class='fa-solid fa-code'></i> Source Code",
        link2a: "<i class='fa-solid fa-tower-broadcast'></i> Live Site",
        link2b: "<i class='fa-solid fa-code'></i> Source Code"
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
        skill3: "Tajriba kiasi kwenye React",
        sectproj: "Miradi Yangu",
        ptitle1: "Tovuti ya Biashara Mtandao ya Kicks.Co",
        ptitle2: "Wijeti za GitHub",
        pp1: "Huu ni mfano wa tovuti ya Biashara Mtandao ambayo inahusiana na uuzaji wa viatu, vinavyojulikana kama 'Kicks' kwenye msamiati wa lugha ya misimu ya Kiingereza.<br><br>Ujenzimbele: HTML, CSS, JS <br>Ujenzinyuma: JS, Firestore Firebase",
        pp2: "Hii ni Huduma isiyo rasmi ya Wijeti ya GitHub inayomruhusu mtu kupachika Wasifu wake wa GitHub na maelezo ya Hifadhi za GitHub kwenye tovuti zao.<br><br>Ujenzimbele: HTML, CSS, JS <br>Ujenzinyuma: JS</p>",
        link1a: "<i class='fa-solid fa-tower-broadcast'></i> Tovuti ya Moja kwa Moja",
        link1b: "<i class='fa-solid fa-code'></i> Msimbo Chanzo",
        link2a: "<i class='fa-solid fa-tower-broadcast'></i> Tovuti ya Moja kwa Moja",
        link2b: "<i class='fa-solid fa-code'></i> Msimbo Chanzo"
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
        skill3: "Einige Erfahrung mit React",
        sectproj: "Meine Projekte",
        ptitle1: "Kicks.Co E-Commerce-Website",
        ptitle2: "GitHub Widgets",
        pp1: "Dies ist der Prototyp einer E-Commerce-Website, die auf den Verkauf von Turnschuhen spezialisiert ist, die im englischen Slang auch als „Kicks“ bekannt sind.<br><br>Frontend: HTML, CSS, JS <br>Backend: JS, Firestore Firebase",
        pp2: "Dies ist ein inoffizieller GitHub-Widget-Dienst, der es ermöglicht, Informationen zu GitHub-Profilen und GitHub-Repositorys auf den eigenen Websites einzubetten.<br><br>Frontend: HTML, CSS, JS <br>Backend: JS</p>",
        link1a: "<i class='fa-solid fa-tower-broadcast'></i> Live-Site",
        link1b: "<i class='fa-solid fa-code'></i> Quellcode",
        link2a: "<i class='fa-solid fa-tower-broadcast'></i> Live-Site",
        link2b: "<i class='fa-solid fa-code'></i> Quellcode"
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
        document.getElementById('sectproj').innerHTML = translations[selectedLanguage].sectproj;
        document.getElementById('ptitle1').innerHTML = translations[selectedLanguage].ptitle1;
        document.getElementById('ptitle2').innerHTML = translations[selectedLanguage].ptitle2;
        document.getElementById('pp1').innerHTML = translations[selectedLanguage].pp1;
        document.getElementById('pp2').innerHTML = translations[selectedLanguage].pp2;
        document.getElementById('link1a').innerHTML = translations[selectedLanguage].link1a;
        document.getElementById('link1b').innerHTML = translations[selectedLanguage].link1b;
        document.getElementById('link2a').innerHTML = translations[selectedLanguage].link2a;
        document.getElementById('link2b').innerHTML = translations[selectedLanguage].link2b;

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
