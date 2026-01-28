"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

//data - produkter
const products = [
  {
    title: "Fjällraven Backpack",
    price: 849,
    inStock: true,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    description: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "Outdoor gear",
  },
  {
    title: "Slim Fit T-Shirt For Men",
    price: 179,
    inStock: true,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-buttons",
    category: "men's clothing",
  },
  {
    title: "Comfortable Women's V-neck",
    price: 120,
    inStock: false,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    description:
      "Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit",
    category: "Fitness",
  },
];

// Initialize app
function initApp() {
  console.log("App initialized");
  displayAllProducts();
}

//displayAllProducts funktionen - viser alle produkterne
function displayAllProducts() {
  productGrid.innerHTML = "";
  for (const product of products) {
    displayProduct(product);
  }
}

//displayProduct funktionen - viser ét produkt
function displayProduct(product) {
  //lager status, vigtigt at denne er inde i funktionen
  let stockText;
  let stockClass;

  if (product.inStock) {
    stockText = "På lager";
    stockClass = "in-stock";
  } else {
    stockText = "Udsolgt";
    stockClass = "out-of-stock";
  }

  //produkt html, dom manipulation
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

  document.querySelector("#productGrid").insertAdjacentHTML("beforeend", html);
}

/*Produktdataen ligger i js, og HTML bruges kun som container,
som js dynamisk fylder med produktkort*/
