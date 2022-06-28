import { ActionTypes } from '../constants/action-types';
import fakeStoreApi from '../../api/fakeStoreApi';
export const fetchProducts = () => async (dispatch, getState) => {
  const response = await fakeStoreApi.get('/products');
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

  //     return async function (dispatch,getState){
  //         const response = await fakeStoreApi.get("/products");
  //         dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
  //    }
  //actions are plain objects
  //   return {
  //     type: ActionTypes.SET_PRODUCTS,
  //     payload: response,
  //   };
};
export const fetchProduct = (id) => async (dispatch, getState) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response.data });
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return { type: ActionTypes.REMOVE_SELECTED_PRODUCTS };
};
