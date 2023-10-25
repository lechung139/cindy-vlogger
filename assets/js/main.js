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
};


/***
 * Show Modal-Ticket when click on Buy-Button of TOUR
 */
const buyButtonS = document.querySelectorAll("#tour .places-tour .columns .buy");
const modalTicket = document.querySelector("#tour .modal-tickets");
const boardTicket = document.querySelector("#tour .modal-tickets .board-tickets");
const closeButtonS = document.querySelectorAll("#tour .modal-tickets .close-btn");
// Open Board:
for (const buyButton of buyButtonS) {
    buyButton.onclick = function () {
        modalTicket.classList.add("open");
        modalTicket.classList.remove("closing-animate");
    }
}
// Close Board with animation:
const closeAnimateTickets = function () {
    modalTicket.classList.replace("open", "closing-animate");
}
for (const closeButton of closeButtonS) {
    closeButton.onclick = closeAnimateTickets;
}
modalTicket.onclick = closeAnimateTickets;
boardTicket.onclick = function (event) {
    event.stopPropagation();
}


/** 
 * Open Nav Header
 */
const openNavButton = document.querySelector('header .menu');
const aNavS = document.querySelectorAll('header nav .navHeaderMobileJS');
const moreList = document.querySelector('header .more');

openNavButton.onclick = function () {
    for (let aNav of aNavS) {
        aNav.classList.toggle("openNavJS");
    }
}
moreList.onclick = function () {
    moreList.classList.toggle('openMoreListJS');
}
// Close Nav Header when clicking a nav
const aNavClickS = document.querySelectorAll('header nav a[href]');
for (let aNavClick of aNavClickS) {
    aNavClick.onclick = function () {
        for (let aNav of aNavS) {
            aNav.classList.remove("openNavJS");
        }
    }
}