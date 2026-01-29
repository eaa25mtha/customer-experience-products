import { getAllProducts } from "./helpers.js";

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
  const html = /*html*/ `
    <div class="product-detail-container">
        <div class="product-image-large">
            <img src"${product.image}" alt="${product.title}"/>
        </div>
        <div class="product-details">
            <h1>${product.title}</h1>
            <p class="category">Kategori: ${product.category}</p>
            <p class="price-large"> $${product.price}</p>
            <p>${product.description}</p>
        </div>
        </div>
    `;

  document.querySelector("#product").innerHTML = html;
}
