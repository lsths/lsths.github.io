// Navbar
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-options");
menuBtn.onclick = () => {
  menu.classList.toggle("active-nav");
};

// Student Selector
const tableCell = document.querySelectorAll("td");

tableCell.forEach((cell) => {
  cell.addEventListener("click", () => {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => card.classList.remove("show_card"));

    const cardToShow = document.querySelector(
      `.card#${cell.dataset.cardId}-card`
    );
    cardToShow.classList.add("show_card");
  });
});

// Age Calculator
function monthTextToNumber(monthText) {
  var monthNames = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  return monthNames[monthText] || null; 
}

var studentCards = document.querySelectorAll(".card"); 
for (var i = 0; i < studentCards.length; i++) {
  var studentCard = studentCards[i];
  var birthdateElement = studentCard.querySelector("#Sbday"); 
  var ageElement = studentCard.querySelector("#Sage"); 
  if (birthdateElement) {
    var birthdateText = birthdateElement.textContent.trim();
    var birthdateParts = birthdateText.split(/[,:\s]+/);
    var monthText = monthTextToNumber(birthdateParts[1]); 
    var day = parseInt(birthdateParts[2]); 
    var year = birthdateParts[3];

    var today = new Date();
    var age = today.getFullYear() - year;
    var month = today.getMonth() - new Date(year, monthText - 1).getMonth();

    if (month < 0 || (month === 0 && today.getDate() < day)) {
      age--;
    }

    ageElement.innerHTML = "Age: " + age;
  } else {
    console.warn("Student card " + (i + 1) + " missing birthdate element.");
  }
}

// Custom video controls
var tag = document.createElement("script")
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video_player', {
        videoId: 'n-s2XShlXVY',
        playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            loop: 1,
            rel: 0,
            playlist: 'n-s2XShlXVY',
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerReady(event) {
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const unmuteBtn = document.getElementById('unmuteBtn');
  const muteBtn = document.getElementById('muteBtn');

  let Playing = false; 
  let Muted;
  function checkPlayerState() {
    Playing = player.getPlayerState() === YT.PlayerState.PLAYING;
    Muted = player.isMuted();
    updateButtonVisibility(Playing, Muted);
  }
  checkPlayerState();
  setInterval(checkPlayerState, 1);

  function updateButtonVisibility(Playing, Muted) {
    playBtn.classList.toggle("hidden", Playing);
    pauseBtn.classList.toggle("hidden", !Playing);
    unmuteBtn.classList.toggle("hidden", Muted);
    muteBtn.classList.toggle("hidden", !Muted);
  }  

  playBtn.addEventListener('click', function () {
    if (!Playing) {
      player.playVideo();
      Playing = true;
    }
    updateButtonVisibility(Playing);
  });

  pauseBtn.addEventListener('click', function () {
    if (Playing) {
      player.pauseVideo();
      Playing = false;
    }
    updateButtonVisibility(Playing);
  });

  unmuteBtn.addEventListener('click', function () {
    if (!Muted) {
      player.mute();
      Muted = true;
    }
    updateButtonVisibility(Muted)
  });

  muteBtn.addEventListener('click', function () {
    if (Muted) {
      player.unMute();
      Muted = false;
    }
      updateButtonVisibility(Muted)
  });
}

