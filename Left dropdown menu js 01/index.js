let arrow = document.querySelectorAll(".arrow");
for(var i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", (e)=>{
        let arrowPresent = e.target.parentElement.parentElement;
        arrowPresent.classList.toggle("showMenu");
    });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".fa-bars");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});