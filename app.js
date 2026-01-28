"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

// ======== TEST SEKTION ===========
//produkt 1
const productTitle = "Fjallraven - Foldsack No. 1 Backpack"; //string
const productPrice = 849; //number
const inStock = true; //boolean

//typeof bruges til at skrive datatypen i konsollen
console.log(typeof productTitle);
console.log(typeof productPrice);
console.log(typeof inStock);

//Test af dom-manipulation, indsæt i html
if (inStock) {
  //hvis inStock = true, vises sektionen på siden
  const testSection = document.querySelector("#test");
  const html = `
  <div>
    <h3>Test: Produkt information</h3>
    <p><strong>Titel:</strong> ${productTitle}</p>
    <p><strong>Pris:</strong> ${productPrice} kr</p>
    <p><strong>På lager:</strong> ${inStock}</p>
  </div>
`;
  testSection.insertAdjacentHTML("beforeend", html);
}

if (inStock) {
  console.log(`${productTitle} er på lager!`);
} else {
  console.log(`${productTitle} er desværre ikke på lager!`);
}

//produkt 2
const productTitle2 = "Mens Casual Premium Slim Fit T-Shirts";
const productPrice2 = 179;
const inStock2 = true;

console.log(productTitle2);
console.log(productPrice2);
console.log(inStock2);

if (inStock2) {
  const testSection2 = document.querySelector("#test");
  const html2 = `
  <div>
    <h3>Test 2: Produkt information</h3>
    <p><strong>Titel:</strong> ${productTitle2}</p>
    <p><strong>Pris:</strong> ${productPrice2}</p>
    <p><strong>På lager</strong> ${inStock2}</p>
  </div>
`;
  testSection2.insertAdjacentHTML("beforeend", html2);
}

if (inStock2) {
  console.log(`${productTitle2} er på lager!`);
} else {
  console.log(`${productTitle2} er desværre ikke på lager!`);
}

//sammenligning af priser med if-sætninger
