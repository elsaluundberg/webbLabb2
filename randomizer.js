function showRandomDeal() {
    const deals = [
        "Bli medlem idag och ange koden 'VAGN' för en fri vagn vid din nästa runda!🛒",
        "Bli medlem idag och ange koden 'HINK' för en gratis hink på rangen!⛳",
        "Bli medlem idag och ange koden 'KEPS' för en gratis Gunnarn GK keps!🧢"
    ];

    // Slump-logiken
    let randomNum = Math.random();
    let multiplied = randomNum * deals.length;
    let index = Math.floor(multiplied);

    // Hitta elementen
    const overlay = document.getElementById("fab-deal-overlay");
    const textContainer = document.getElementById("random-deal-text");

    // Skriv in det slumpade erbjudandet
    textContainer.innerHTML = `<strong>${deals[index]}</strong>`;
    overlay.style.display = "block";
}

function closeDeal() {
    document.getElementById("fab-deal-overlay").style.display = "none";
}

// Funktion 1: Ändrar utseendet (Appearance change)
function expandButton() {
    const btn = document.getElementById("deal-fab");
    btn.style.transform = "scale(1.1)";      // Gör knappen större
    btn.style.backgroundColor = "#1b5e20";   // Gör den mörkare grön
    btn.style.transition = "0.3s";           
}

// Funktion 2: Återställer utseendet
function shrinkButton() {
    const btn = document.getElementById("deal-fab");
    btn.style.transform = "scale(1)";        // Går tillbaka till vanlig storlek
    btn.style.backgroundColor = "#2e7d32";   // Tillbaka till originalgrön
}


