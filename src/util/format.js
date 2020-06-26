// export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });

export function formatPrice(price) {
  return `R$${price.toFixed(2)}`;
}
