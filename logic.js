const navHome = document.getElementById("home");
const navAbout = document.getElementById("about");
const navEducation = document.getElementById("education");
const navExperience = document.getElementById("experience");
const navProjects = document.getElementById("projects");
const navContacts = document.getElementById("contact");

let navList = [navHome, navAbout, navEducation, navExperience, navProjects, navContacts];
navList.forEach(nav =>{
    nav.addEventListener("click",function (){
        navList.forEach(n=> n.classList.replace("active","inactive"))
        this.classList.remove("inactive");
        this.classList.add("active")
    });
});
