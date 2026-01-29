//"use strict"; slår automatisk til når vi bruger modules

// ===== APP INITIALISERING =====
//import
import { products } from "./data.js";
import { getExcerpt, getStockStatus } from "./helpers.js";

// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize app
function initApp() {
  console.log("App initialized");
  displayAllProducts();
}

//displayAllProducts funktionen - viser alle produkterne
function displayAllProducts() {
  //ryd grid
  document.querySelector("#productGrid").innerHTML = "";
  //loop gennem alle produkter
  for (const product of products) {
    //kald displayProduct funktionen for hvert produkt
    displayProduct(product);
  }
}

//displayProduct funktionen - viser ét produkt
function displayProduct(product) {
  const stock = getStockStatus(product.inStock);

  //produkt html, dom manipulation
  //substring klipper teksten så den bliver kortere
  const html = /*html*/ `
    <article class="product-card">
      <img src="${product.image}" class="product-image">
      <div class="product-info">
        <h2 class="product-name">${product.title}</h2>
        <p class="product-description">${product.description}</p> 
        <p class="product-price">${product.price} kr</p>
        <span class="product-stock ${stockClass}">${stockText}</span>
      </div>
    </article>
  `;

  //indsæt i DOM
  document.querySelector("#productGrid").insertAdjacentHTML("beforeend", html);
}
