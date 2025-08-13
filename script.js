function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();


function initScrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")

    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}
linksInternos.forEach((item) =>{
    item.addEventListener('click', scrollToSection)
})
}

initScrollSuave()