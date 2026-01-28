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
const productPrice = 800; //number
const inStock = true; //boolean

//produkt 2
const productTitle2 = "Mens Casual Premium Slim Fit T-Shirts";
const productPrice2 = 200;
const inStock2 = false;

//dom-manipulation
if (productPrice < productPrice2) {
  //hvis prisen på produkt 1 er mindst, skal den vises, ellers skal produkt 2 vises på siden
  const testSection = document.querySelector("#test");
  const html = `
  <div>
    <h3>Test: Produkt information 1</h3>
    <p><strong>Titel:</strong> ${productTitle}</p>
    <p><strong>Pris:</strong> ${productPrice} kr</p>
    <p><strong>På lager:</strong> ${inStock}</p>
  </div>
`;
  testSection.insertAdjacentHTML("beforeend", html);
} else {
  const testSection2 = document.querySelector("#test");
  const html2 = `
  <div>
    <h3>Test 2: Produkt information 2</h3>
    <p><strong>Titel:</strong> ${productTitle2}</p>
    <p><strong>Pris:</strong> ${productPrice2}</p>
    <p><strong>På lager</strong> ${inStock2}</p>
  </div>
`;
  testSection2.insertAdjacentHTML("beforeend", html2);
}

//if-sætning der tester om produktet er på lager og udskriver til konsollen
if (inStock) {
  console.log(`${productTitle} er på lager!`);
} else {
  console.log(`${productTitle} er desværre ikke på lager!`);
}

if (inStock2) {
  console.log(`${productTitle2} er på lager!`);
} else {
  console.log(`${productTitle2} er desværre ikke på lager!`);
}

//sammenligning af priser
if (productPrice > productPrice2) {
  console.log(`${productTitle} er dyrest og koster ${productPrice} kr`);
} else {
  console.log(`${productTitle2} er dyrest og koster ${productPrice2} kr`);
}
