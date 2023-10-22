/***
 * Automatic Slideshow - change image every 3 seconds
 */
let myIndex = 0;
carousel();
function carousel() {
    let i;
    let x = document.querySelectorAll(".slider-theBand .slides-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);    
}


/***
 * Show Modal-Ticket when click on Buy-Button of TOUR
 */
const buyButtonS = document.querySelectorAll("#tour .places-tour .columns .buy");
const modalTicket = document.querySelector("#tour .modal-tickets");
const boardTicket = document.querySelector("#tour .modal-tickets .board-tickets");
const closeButtonS = document.querySelectorAll("#tour .modal-tickets .close-btn");

// Open Board:
function openModalTicket() {
    modalTicket.classList.add("open");
    modalTicket.classList.remove("closing-animate");
}
for (const buyButton of buyButtonS) {
    buyButton.addEventListener("click", openModalTicket);
}

// Close Board with animation:
function closeModalTicket() {
    modalTicket.classList.replace("open", "closing-animate");
}
for (const closeButton of closeButtonS) {
    closeButton.addEventListener("click", closeModalTicket);
}
modalTicket.addEventListener("click", closeModalTicket);
boardTicket.addEventListener("click", function (event) {
    event.stopPropagation();
});

/** 
 * Open Nav Header
 */
const openNavButton = document.querySelector('header .menu');
const aNavS = document.querySelectorAll('header nav a,.more');

function openNav() {
    for (let aNav of aNavS) {
        aNav.classList.toggle("openNavJS");
    }
};
function closeNav() {       // Close Nav Header when click a nav
    for (let aNav of aNavS) {
        aNav.classList.remove("openNavJS");
    }
}

openNavButton.addEventListener("click", openNav);
for (let aNav of aNavS) {
    aNav.addEventListener("click", closeNav)
}