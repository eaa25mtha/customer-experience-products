//hjælpefunktioner til app.js

//getExcerpt funktion forkorter strings
export function getExcerpt(text) {
  const excerpt = text.substring(0, 100) + "...";
  return excerpt;
}

//hjælpefunktion til lagerstatus
export function getStockStatus(inStock) {
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
