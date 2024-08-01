const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday","friday","saturday"];
function updateClock() {
 const now = new Date();

  const hours = now.getHours().toString().padStart(2,0);
  const minutes = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  const timeString = `${hours}:${minutes}`;
  document.getElementById("clock").textContent = timeString;
  
  
}

function fullDate() {
  const now = new Date();
  const year = now.getFullYear().toString().padStart(4,0);
  const month = now.getMonth().toString().padStart(2,0);
  const week = now.getDay();
  const day = now.getDate().toString().padStart(2,0);
  const dateString = `${weekdays[week]} , ${year}-${month}-${day}`

  document.getElementById("date").textContent = dateString;
 
}
fullDate();
updateClock();
setInterval(updateClock,1000);



