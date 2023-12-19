let tabs = document.querySelectorAll(".letab");
let tabContent = document.querySelectorAll(".fade");
let tabContentContent = document.querySelectorAll(".tab-content div div");

tabs.forEach((tab, index) =>{
    tab.addEventListener("click", ()=> {
        tabContent.forEach(content => {
            content.classList.remove("active");
        });

        tabContentContent.forEach(contentContent =>{
            contentContent.classList.remove("active");
        });

        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });

        tabs[index].classList.add("active");
        tabContent[index].classList.add("active");
        tabContent[index].classList.add("active");
        tabContentContent[index].classList.add('active');
        tabs[index].classList.add("active");
    });
});