  const colorChanger = document.getElementById("colorChanger");
  const colors = ["HotPink", "LightPink", "Crimson"];
  const originalColor = "black";

  
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

// function randomColor(colors) {
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// colorChanger.addEventListener('click', () => {
//    const newColor = randomColor(colors);

//    document.body.style.backgroundColor = newColor;
//    colorChanger.textContent = `Color: ${newColor}`;
  
//    console.log(newColor);
// });


// function randomColor(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }

//   const originalColor = "black";
//   let isOriginal = true;

//   colorChanger.addEventListener("click", () => {
//     if (isOriginal) {
//       const newColor = randomColor(colors);
//       document.body.style.backgroundColor = newColor;
//       colorChanger.textContent = `Color: ${newColor}`;
//       console.log(newColor);
//     } else {
//       document.body.style.backgroundColor = originalColor;
//       colorChanger.textContent = "Change Color";
//     }
//     isOriginal = !isOriginal;
//   });

