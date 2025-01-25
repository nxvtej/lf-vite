/**
 * Countdown to the year you think you will die
 * this rest coundown when clicked resets the localstorage deadline
 * need to make change such that it resets only when user confirms and not auto matically if user dont confirm
 * presests the previous deadline if it exists and add small button to reset the deadline
 */
const resetCountdown = () => {
  localStorage.removeItem("deadline");
  location.reload();
};

if (!localStorage.getItem("deadline")) {
  const inputYear = prompt(
    "Enter the year in which you think you will die:",
    "2050"
  );
  localStorage.setItem("deadline", inputYear);
}
const deadline = localStorage.getItem("deadline");
const countDownDate = new Date(`Jan 1, ${deadline}`).getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(
    ".countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) resetCountdown();
}, 1000);

document.querySelector(".button").addEventListener("click", resetCountdown);
