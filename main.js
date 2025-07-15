window.onload = function () {
  const allCards = [
    "Fire Wizard",
    "Ice Archer",
    "Goblin King",
    "Lightning Mage",
    "Dark Knight",
    "Healer Elf"
  ];

  let collection = [];

  document.getElementById("loginBtn").addEventListener("click", login);

  function login() {
    const username = document.getElementById("username").value;
    if (!username) {
      alert("Please enter a username.");
      return;
    }

    document.getElementById("auth").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("playerName").textContent = username;
  }

  window.buyCard = function () {
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
};
