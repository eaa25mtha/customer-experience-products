"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

const productTitle = "Fjallraven - Foldsack No. 1 Backpack"; //string
const productPrice = 849; //number
const inStock = true; //boolean

//typeof bruges til at skrive datatypen i konsollen
console.log(typeof productTitle);
console.log(typeof productPrice);
console.log(typeof inStock);

//Test af dom-manipulation
const testSection = document.querySelector("#test");
const html = `
  <div>
    <h3>Test: Produkt information</h3>
    <p><strong>Titel:</strong> ${productTitle}</p>
    <p><strong>Pris:</strong> ${productPrice} kr</p>
    <p><strong>På lager:</strong> ${inStock}</p>
  </div>
`;
testSection.insertAdjacentHTML("berforeend", html);
