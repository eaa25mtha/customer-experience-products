//"use strict"; slår automatisk til når vi bruger modules

//import
import { getExcerpt, getAllProducts } from "./helpers.js";

// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize app
async function initApp() {
  console.log("App initialized 🚀");
  const products = await getAllProducts(); //opdateret til at være async
  displayAllProducts(products);
}

//vis alle produkter
//.map() returnerer html strenge som .join() sætter sammen
const displayAllProducts = (products) => {
  const grid = document.querySelector("#productGrid");
  grid.innerHTML = products.map(displayProduct).join("");
};

//vis ét produkt
function displayProduct(product) {
  return /*html*/ `
    <article class="product-card">
      <!--product.html?id gør at billedet bliver klikbart-->
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" class="product-image" />
      </a>
      <div class="product-info">
        <h3 class="product-title"> ${product.title}
          <!--denne linje under gør titlen til et link der fører videre til produkt detalje siden-->
          <!--<a href="product.html?id=${product.id}">${product.title}</a>-->
        </h3>
        <p class="product-description">${getExcerpt(product.description)}</p>
        <p class="product-price">${product.price} kr</p>
        <!--ternary operator-->
        <span class="product-stock ${product.inStock ? "in-stock" : "out-of-stock"}">
          ${product.inStock ? "På lager" : "Udsolgt"}
        </span>
        <!--rating badge optinional-->
        <!--${product.rating.count > 200 && `<span class="badge"> ⭐ Top rated!</span>`}-->
      </div>
    </article>
  `;
}
