import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/ProductAction';

export default function ProductListing() {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(products)
    // const fetchProducts = async()=>{
    //     console.log("fetch products")
    //     const response = await axios.get("https://fakestoreapi.com/products").catch((error)=>{
    //         console.log("error",error)
    //     })
    //     console.log(response.data)
    //     dispatch(setProducts(response.data))
    // }
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    console.log("products",products)
  return (
    <div><h1>ProductListing</h1></div>
  )
}
