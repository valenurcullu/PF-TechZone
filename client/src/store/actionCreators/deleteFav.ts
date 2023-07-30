import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType } from "../actionTypes";

export const deleteFav = (userId:number, productId:number) => {
  return async (dispatch: Dispatch<Action>) => {
  
    
          const deleteOk = await axios.delete(
            `http://localhost:3001/cart/item/${userId}/${productId}`
          );
          if (deleteOk.status === 200) {
            const { data } = await axios.get(
              `http://localhost:3001/cart/items/${userId}`
            );
           
  
            dispatch({
              type: ActionType.GET_CART_ITEMS,
              payload: data,
            });
          }
   
  };
};