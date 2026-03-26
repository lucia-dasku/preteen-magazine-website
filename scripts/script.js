// External JavaScript 

//Function to flip Horoscope cards
function flipCard(element) {
  const card = element.closest('.card');
  card.classList.toggle('flipped');
}


// Get the modal and close button elements
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener for button click
document.querySelector(".spin-on-hover").addEventListener("click", openModal);

// Event listener for close button click
closeBtn.addEventListener("click", closeModal);

// Event listener for clicking outside the modal to close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

// To play hairstyle videos, play, pause, sound control
document.getElementById('hairstylesVideo').addEventListener('click', function () {
  var video = this; // Refers to the video element

  if (video.paused) { // If the video is paused, play it
    video.play();
  } else { // If the video is playing, pause it
    video.pause();
  }
});


// Function to check the quiz
function submitQuiz() {
  checkMultipleChoice('q1');
  checkTrueFalse('q2');
  checkFillInTheBlank('q3');
}