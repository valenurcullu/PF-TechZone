import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType } from "../actionTypes";
// desde la bdd viene el id como number, y las imagenes en array las dos "images".
//habria que modificar la interface, aca el id :number.
//en store.ts chequear el de product.
//en la interface de Detail creo que deberia ir detailReducerInterface y exportar eso
//y en reducers index en vez de product interface el creado arriba(detailReducerInterface)
export const getFav = (userId:number) => {
  return async (dispatch: Dispatch<Action>) => {
  
    const { data } = await axios.get(`http://localhost:3001/cart/items/${userId}`);
  
    
    dispatch({
      type: ActionType.GET_FAV_ITEMS,
      payload: data,
    });
   
  };
};