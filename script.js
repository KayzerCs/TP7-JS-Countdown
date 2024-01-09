// Exercice :

// const form = document.getElementById("form");
// const choice = document.getElementById("choice");
// const countdownDisplay = document.getElementById("countdownDisplay");

// let totalSeconds;
// let countdownInterval;

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const minutes = parseInt(choice.value, 10);

//   if (!isNaN(minutes) && minutes > 0) {
//     totalSeconds = minutes * 60;
//     startCountdown();

//     countdownInterval = setInterval(updateCountdown, 1000);

//     countdownDisplay.addEventListener("click", stopCountdown);
//   }
// });

// function startCountdown() {
//   updateCountdown();
// }

// function updateCountdown() {
//   const hours = Math.floor(totalSeconds / 3600);
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const seconds = totalSeconds % 60;

//   let displayText = "";

//   if (hours > 0) {
//     displayText += `${hours} heure${hours !== 1 ? "s" : ""} `;
//   }

//   if (minutes > 0 || hours > 0) {
//     displayText += `${minutes} minute${minutes !== 1 ? "s" : ""} `;
//   }

//   displayText += `${seconds} seconde${seconds !== 1 ? "s" : ""}`;

//   countdownDisplay.innerHTML = `${displayText}`;
//   totalSeconds--;

//   if (totalSeconds < 0) {
//     clearInterval(countdownInterval);
//     const message =
//       totalSeconds === 0
//         ? "Le compte à rebours est terminé!"
//         : "Le compte à rebours a été arrêté.";
//     countdownDisplay.innerHTML = message;
//     setTimeout(() => {
//       countdownDisplay.innerHTML = "";
//     }, 2000);
//   }
// }

// function stopCountdown() {
//   clearInterval(countdownInterval);
//   countdownDisplay.innerHTML = "Le compte à rebours a été arrêté.";
//   setTimeout(() => {
//     countdownDisplay.innerHTML = "";
//   }, 2000);
// }

// ***************************************************************************************************************************

// Correction : 