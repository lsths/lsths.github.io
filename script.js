// Navbar
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-options");
menuBtn.onclick = ()=>{
    menu.classList.toggle("active-nav");
}

// Student Selector
const tableCell= document.querySelectorAll("td");
        
tableCell.forEach(cell => {
    cell.addEventListener('click', () => {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach(card => card.classList.remove("show_card")); // Hide all cards

    const cardToShow = document.querySelector(`.card#${cell.dataset.cardId}-card`);
    cardToShow.classList.add("show_card"); // Show the clicked cell's card
    });
});