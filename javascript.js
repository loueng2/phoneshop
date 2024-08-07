function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
  
    if (sidenav.classList.contains("open")) {
      sidenav.classList.remove("open");
      side_left.style.marginTop = "0";
    } else {
      sidenav.classList.add("open");
      side_left.style.marginTop = "0px";
    }
  }

// animation of web page---------
  AOS.init();

// time -----------------------
  function updateTimeAndDay() {
    const now = new Date();
    const days = String(now.getDay()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const dayOfWeek = days[now.getDay()];
    const timeday = `${days}`;
    const timehour = `${hours}`;
    const timeminute = `${minutes}`;
    const timesecond = `${seconds}`;
    document.getElementById('timeday').textContent = timeday;
    document.getElementById('timehour').textContent = timehour;
    document.getElementById('timeminute').textContent = timeminute;
    document.getElementById('timesecond').textContent = timesecond;
}
// Update the time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial update
updateTimeAndDay();
