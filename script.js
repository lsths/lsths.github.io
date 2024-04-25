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

// Month conversion function
function monthTextToNumber(monthText) {
    var monthNames = {
      "January": 1, 
      "February": 2, 
      "March": 3, 
      "April": 4, 
      "May": 5, 
      "June": 6,
      "July": 7, 
      "August": 8, 
      "September": 9, 
      "October": 10, 
      "November": 11, 
      "December": 12
    };
    
    return monthNames[monthText] || null; // Return null if monthText not found
}

// Loop through all student cards
var studentCards = document.querySelectorAll(".card"); // Select all elements with class "card" (assuming all student cards have this class)

for (var i = 0; i < studentCards.length; i++) {
  var studentCard = studentCards[i];
  var birthdateElement = studentCard.querySelector("#Sbday"); // Find the element with id "Sbday" within the card
  var ageElement = studentCard.querySelector("#Sage"); // Find the element with id "Sage" within the card

  if (birthdateElement) {
    // Extract the birthdate text
    var birthdateText = birthdateElement.textContent.trim();

    // Split the text based on commas and spaces
    var birthdateParts = birthdateText.split(/[,:\s]+/);  // Regular expression for comma followed by one or more spaces

    // Extract month text, day, and year
    var monthText = monthTextToNumber(birthdateParts[1]); // Convert month text to number
    var day = parseInt(birthdateParts[2]); // Convert day string to number
    var year = birthdateParts[3]; // Convert year string to number

    // Calculate age
    var today = new Date();
    var age = today.getFullYear() - year;
    var month = today.getMonth() - (new Date(year, monthText - 1)).getMonth();

    if (month < 0 || (month === 0 && today.getDate() < day)) {
      age--;
    }

    // Update the age element
    ageElement.innerHTML = "Age: " + age;

  } else {
    console.warn("Student card " + (i + 1) + " missing birthdate element.");
  }
}
