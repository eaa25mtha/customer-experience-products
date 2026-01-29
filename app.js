//"use strict"; slår automatisk til når vi bruger modules

//import
//import { products } from "./data.js";
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
  return /*html*/ `
    <article class="product-card">
      <img src="${product.image}" class="product-image" />
      <div class="product-info">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-description">${getExcerpt(product.description)}</p>
        <p class="product-price">${product.price}</p>
        <!--ternary operator-->
        <span class="product-stock ${product.inStock ? "in-stock" : "out-of-stock"}">
          ${product.inStock ? "På lager" : "Udsolgt"}
        </span>
        <!--rating badge-->
        ${product.rating.count > 200 && `<span class="badge"> ⭐ Top rated!</span>`}
      </div>
    </article>
  `;
}
