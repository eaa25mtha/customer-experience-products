//"use strict"; slår automatisk til når vi bruger modules

// ===== APP INITIALISERING =====
//import af produkter fra data.js filen
import { products } from "./data.js";

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

//hjælpefunktion til lagerstatus
let stockText;
let stockClass;
function getStockStatus(inStock) {
  if (inStock) {
    return {
      text: "På lager",
      class: "in-stock",
    };
  } else {
    return {
      text: "Udsolgt",
      class: "out-of-stock",
    };
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
