let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    Sections.forEach(sec =>){
        let top=window.scrollY;
        let offset =sec.offsetTop - 100)
        let height =offsetHeights;
        let id =sec.offsetHeights
    }
    let header = document.querySelector('header');
     
    header.classList.toggle('sticky',window.scrollY > 100);
} 