const allCards = ["Fire Wizard", "Ice Archer", "Goblin King", "Lightning Mage", "Dark Knight", "Healer Elf"];
let collection = [];

function login() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a username.");
    return;
  }

  // Fake login (no backend yet)
  document.getElementById("auth").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("playerName").textContent = username;
}

function buyCard() {
  const randomIndex = Math.floor(Math.random() * allCards.length);
  const card = allCards[randomIndex];
  document.getElementById("cardArea").textContent = `You got: ${card}`;
  collection.push(card);
  updateCollection();
}

function updateCollection() {
  const list = document.getElementById("collection");
  list.innerHTML = "";
  collection.forEach(card => {
    const li = document.createElement("li");
    li.textContent = card;
    list.appendChild(li);
  });
}
