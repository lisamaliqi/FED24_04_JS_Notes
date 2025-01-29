# Vad är Single Source of Truth (SSOT) och varför är det viktigt?

**Single Source of Truth (SSOT)** betyder att data bara lagras på **en plats** i din kod. Det hjälper till att undvika problem som kan uppstå om samma information finns på flera ställen, eftersom alla ändringar då måste göras överallt, vilket kan leda till buggar.

## SSOT i vanilla JavaScript

När du jobbar med **vanilla JavaScript** kan du använda SSOT för att hantera data på ett ställe och undvika inkonsekvenser. Här är ett exempel:

```js
let currentScore = 0;

function updateScore(newScore) {
  currentScore = newScore;
  document.getElementById("scoreDisplay").textContent = "Poäng: " + currentScore;
}
```

Här lagras poängen i en variabel, och när den ändras uppdateras både variabeln och vad som visas i webbläsaren.

Om du istället använder flera variabler för samma data, till exempel:

```js
let currentScore = 0;
let displayedScore = 0;

function updateScore(newScore) {
  currentScore = newScore;
  displayedScore = currentScore;
  document.getElementById("scoreDisplay").textContent = "Poäng: " + displayedScore;
}
```

...kan det bli problem. Om variablerna inte hålls synkade kan det leda till buggar.

## Varför är SSOT viktigt?

1. Mindre risk för buggar: Du ändrar data på ett ställe, vilket gör koden mer pålitlig.
2. Lättare att underhålla: Det är tydligare var data lagras och uppdateras.
3. Bättre struktur: Koden blir enklare att läsa och förstå.

Att följa SSOT-principen är en bra vana, även i enkla projekt. Det gör det lättare att skala upp din kod när applikationer blir mer avancerade.
