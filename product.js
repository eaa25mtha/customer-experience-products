import { getAllProducts } from "./helpers.js";

document.addEventListener("DOMContentLoaded", initProduct);

async function initProduct() {
  console.log("Product page initialized 🚀");

  //læs URL-parametre
  const urlParams = new URLSearchParams(window.location.search); //returnerer ?id=1
  const id = urlParams.get("id"); //parser parametrene
  console.log("product ID:", id); //henter værdien af id parameteren
}
