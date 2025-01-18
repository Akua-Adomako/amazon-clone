export const cart = [];

export function addToCart(productId, selectedQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += selectedQuantity;
  } else {
    cart.push({
      productId,
      quantity: selectedQuantity,
    });
  }
}