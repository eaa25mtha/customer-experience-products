import { getAllProducts, getStockStatus } from "./helpers.js";

document.addEventListener("DOMContentLoaded", initProduct);

async function initProduct() {
  console.log("Product page initialized 🚀");

  //læs URL-parametre
  const urlParams = new URLSearchParams(window.location.search); //returnerer ?id=1
  const id = urlParams.get("id"); //parser parametrene
  console.log("product ID:", id); //henter værdien af id parameteren

  //hent alle produkter
  const products = await getAllProducts();

  //find det specifikke produkt
  const product = products.find((p) => p.id == id);

  if (product) {
    displayProduct(product);
  } else {
    document.querySelector("#product").innerHTML =
      "<p>produkt ikke fundet!</p>";
  }
}

//vis produktet
function displayProduct(product) {
  const stock = getStockStatus(product.inStock);

  const html = /*html*/ `
    <div class="product-detail-container">
        <div class="product-image-large">
            <img src="${product.image}" alt="${product.title}"/>
        </div>
        <div class="product-details">
            <h1>${product.title}</h1>
            <p class="category">Kategori: ${product.category}</p>
            <p class="price-large"> $${product.price}</p>
            <span class="product-stock ${stock.class}">${stock.text}</span>
            <p>${product.description}</p>

            <div class="rating">
                <span> ⭐ ${product.rating.rate} / 5</span>
                <span>(${product.rating.count} anmeldelser)</span>
            </div>

            <div class="description-full">
                <h3>Beskrivelse</h3>
                <p>${product.description}</p>
            </div>

            <button class="add-to-cart-btn ${!product.inStock ? "disabled" : ""}">
                ${product.inStock ? "Tilføj til kurv" : "Udsolgt"}
            </button>
        </div>
    </div>
    `;

  document.querySelector("#product").innerHTML = html;

  //eventlistener på knappen
  const button = document.querySelector(".add-to-cart-btn");
  if (product.inStock) {
    button.addEventListener("click", () => {
      console.log("Tilføj til kurv", product);
      alert(`${product.title} tilføjet til kurv!`);
    });
  }
}
