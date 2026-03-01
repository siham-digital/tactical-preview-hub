document.addEventListener("DOMContentLoaded", function () {
  var seconds = 300;
  var timer = document.getElementById("timer");

  setInterval(function () {
    seconds = seconds <= 1 ? 300 : seconds - 1;
    var m = String(Math.floor(seconds / 60)).padStart(2, "0");
    var s = String(seconds % 60).padStart(2, "0");
    timer.textContent = m + ":" + s;
  }, 1000);
});
