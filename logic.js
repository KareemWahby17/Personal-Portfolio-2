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
const pageContact = document.getElementById("contactPage");
const contactMeButton = document.getElementById("contactbtn");
const hireMeButton = document.getElementById("hirebtn");
const contactSubject = document.getElementById("subject");

let navList = [navHome, navAbout, navEducation, navExperience, navProjects, navContacts];
let pages = [pageHome, pageAbout, pageEducation, pageExperience, pageProjects, pageContact];

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
contactMeButton.addEventListener("click", function(){
    pageContact.scrollIntoView({behavior: 'smooth'});
});
hireMeButton.addEventListener("click", function(){
    pageContact.scrollIntoView({behavior: 'smooth'});
    contactSubject.value = "I would like to hire you"
});

window.addEventListener("load", () => {
    const imageUrls = ['2dGraph.png', '3dGraph.png', 'travel.png', 'language.png', 'schedule.jpg', 'encryptor.png', 'Web.png', 'todo.png'];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
});
