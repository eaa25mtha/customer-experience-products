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
