export const calcTotalPrice = (item) => {
  return item.reduce((sum, obj) => obj.price * obj.count + sum, 0);
}