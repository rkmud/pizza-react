import { calcTotalCount } from "./calcCount";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
    try {
      const data = localStorage.getItem('cart');
      const item = JSON.parse(data) || [];
      const totalPrice = calcTotalPrice(item);
      const totalCount = calcTotalCount(item) || 0;
      return {
        item, 
        totalPrice, 
        totalCount
      }
    } catch (error) {
      return [];
    }
  }