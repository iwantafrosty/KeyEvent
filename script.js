document.addEventListener("DOMContentLoaded", function() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let secretKey = getRandomLetter();
  
    document.addEventListener("keydown", function(event) {
      const keyPressed = event.key.toLowerCase();
      if (keyPressed === secretKey) {
        const secretKeyMessage = document.createElement("p");
        secretKeyMessage.textContent = "SECRET KEY PRESSED";
        document.body.appendChild(secretKeyMessage);
        secretKey = getRandomLetter();
      }
    });
  
    function getRandomLetter() {
      return letters[Math.floor(Math.random() * letters.length)];
    }
  

    const lettersList = document.getElementById("letters");
    for (let letter of letters) {
      const li = document.createElement("li");
      li.textContent = letter;
      lettersList.appendChild(li);
    }
  });
  