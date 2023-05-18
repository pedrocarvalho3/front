export const calcTotal = (p) =>
  p.reduce((sum, i) => (sum += i.count * i.price), 0);

export const formatPrice = (price) =>
  price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
