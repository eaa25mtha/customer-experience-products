//"use strict"; slår automatisk til når vi bruger modules

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
  const grid = document.querySelector("#productGrid");
  //.map() bruges til at returnerer html strenge der sættes sammen med .join()
  grid.innerHTML = products.map(displayProduct).join("");
}

//displayProduct funktionen - viser ét produkt
function displayProduct(product) {
  const stock = getStockStatus(product.inStock);

  return /*html*/ `
    <article class="product-card">
      <img src="${product.image}" class="product-image">
      <div class="product-info">
        <h2 class="product-name">${product.title}</h2>
        <p class="product-description">${getExcerpt(product.description)}</p> 
        <p class="product-price">${product.price} kr</p>
        <span class="product-stock ${stock.class}">${stock.text}</span>
      </div>
    </article>
  `;

  document.querySelector("#productGrid").return("beforeend", html);
}

//test
const testProduct = products[2];
const message = testProduct.inStock ? "På lager" : "Udsolgt";
console.log(message);

const discount = testProduct.price > 100 ? 50 : 5;
console.log(`Rabat: ${discount}%`);
