  const colorChanger = document.getElementById("colorChanger");
  const colors = ["HotPink", "LightPink", "Crimson"];
  const originalColor = "black";
  const statusText = document.getElementById("status");

  
let currentIndex = 0;

colorChanger.addEventListener("click", () => {
  if (currentIndex < colors.length) {
    const newColor = colors[currentIndex];
    document.body.style.backgroundColor = newColor;
    colorChanger.textContent = `Color: ${newColor}`;
    console.log(newColor);
    currentIndex++;
  } else {
    document.body.style.backgroundColor = originalColor;
    colorChanger.textContent = "Change Color";
    console.log("Back to original");
    currentIndex = 0; 
  }
});

function myFunction() {
   let element = document.body;
   element.classList.toggle("dark-mode");
}


