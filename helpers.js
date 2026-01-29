//hjælpefunktioner til app.js

//getExcerpt funktion forkorter strings
export function getExcerpt(text) {
  const excerpt = text.substring(0, 100) + "...";
  return excerpt;
}

//hjælpefunktion til lagerstatus
//condition ? valueIfTrue : valueIfFalse - ternary operator
export const getStockStatus = (inStock) =>
  inStock
    ? { text: "På lager", class: "in-stock" }
    : { text: "Udsolgt", class: "out-of-stock" };

//async/await funktion
export const getAllProducts = async () => {
  const url =
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/webshop/products.json";
  const response = await fetch(url); //http get request fra fetch(url) til github
  const data = await response.json(); //JSON konverterer til et array

  return data;
};
