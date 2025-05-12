// Save user's color preference in localStorage
function savePreference() {
    const color = document.getElementById("colorChoice").value;
    localStorage.setItem("preferredColor", color);
    document.getElementById("confirmation").textContent = `Saved your favorite color: ${color}`;
    document.body.style.backgroundColor = color;
  }
  
  // Trigger a CSS animation using JavaScript
  function triggerAnimation() {
    const box = document.getElementById("box");
    box.classList.add("animate");
  
    setTimeout(() => {
      box.classList.remove("animate");
    }, 1000); // Remove class after 1s
  }
  
  // Load and apply saved color preference on page load
  window.onload = () => {
    const savedColor = localStorage.getItem("preferredColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      document.getElementById("confirmation").textContent = `Welcome back! Your saved color is ${savedColor}`;
    }
  };
  