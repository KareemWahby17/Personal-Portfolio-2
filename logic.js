const navHome = document.getElementById("home");
const navAbout = document.getElementById("about");
const navEducation = document.getElementById("education");
const navExperience = document.getElementById("experience");
const navProjects = document.getElementById("projects");
const navContacts = document.getElementById("contact");
const pageHome = document.getElementById("homePage");
const pageAbout = document.getElementById("aboutPage");
const pageEducation = document.getElementById("educationPage");
const pageExperience = document.getElementById("experiencePage");
const pageProjects = document.getElementById("projectsPage");
const pageContacts = document.getElementById("contactPage");

let navList = [navHome, navAbout, navEducation, navExperience, navProjects, navContacts];
let pages = [pageHome, pageAbout, pageEducation, pageExperience, pageProjects, pageContacts];

let scrollEnabled = true;
navList.forEach(nav =>{
    nav.addEventListener("click",function (){
        scrollEnabled = false;
        navList.forEach(n=> n.classList.replace("active","inactive"))
        this.classList.remove("inactive");
        this.classList.add("active")

        setTimeout(() => {
            scrollEnabled = true;
        },500);
    });
});

window.addEventListener("scroll", function(){
    if (!scrollEnabled) return;

    pages.forEach((page,index) =>{
        let position = page.getBoundingClientRect();
        if (position.top <= 80 && position.bottom >= 80){
            navList.forEach(s => {
                s.classList.remove("active",)
                s.classList.add("inactive")
            });
            navList[index].classList.remove("inactive");
            navList[index].classList.add("active");
        }
    });
});