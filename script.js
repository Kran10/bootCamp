let isOn = false;

function toggleLight() {
  const bulb = document.getElementById("bulb");
  const button = document.getElementById("toggleBtn");

  if (isOn) {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    button.textContent = "Turn On";
    isOn = false;
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    button.textContent = "Turn Off";
    isOn = true;
  }
}
