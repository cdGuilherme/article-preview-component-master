function toggleShare() {
  // hides / unhides share toggle
  let shareComponent = document.getElementById("toggle");
  shareComponent.classList.toggle("hidden");

  // get the current color of the toggle button element so we can
  // change to the correct colors
  let currentColor = document.getElementById("toggle-button").style.backgroundColor;
  let isToggleActive = false;

  if (currentColor != "rgb(109, 127, 151)") {
    isToggleActive = true;
  } else {
    isToggleActive = false;
  }

  if (isToggleActive) {
    document.getElementById("toggle-button").style.backgroundColor = "#6d7f97";
    document.getElementById("toggle-button--image").src = "/images/icon-share-active.svg";
  } else {
    document.getElementById("toggle-button").style.backgroundColor = "#ecf2f8";
    document.getElementById("toggle-button--image").src = "/images/icon-share.svg";
  }
}
