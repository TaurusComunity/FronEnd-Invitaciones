document.addEventListener("DOMContentLoaded", function () {
    // Fecha del evento
    const eventDate = new Date("December 15, 2024 05:30:00").getTime();
  
    // Actualiza el contador cada segundo
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = eventDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(countdown);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
      }
  
      // Cálculos de tiempo
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Muestra el tiempo restante
      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }, 1000);
  });
  