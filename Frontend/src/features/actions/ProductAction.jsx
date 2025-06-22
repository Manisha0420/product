import axios from "../../api/Config"
import { loadproducts } from "../reducers/ProductSlice";

export const asyncloadproducts = () => async(dispatch )=>{
     try {
        const {data} = await axios.get('/products');
        dispatch(loadproducts(data));
        console.log("Product Loaded!")
     } catch (error) {
        console.log(error)
     }
}

export const asynccreateproduct = (product) => async(dispatch)=>{
    try {
        await axios.post('/products' , product);
        dispatch(asyncloadproducts);
        console.log("Product created")
    } catch (error) {
        console.log(error)
    }
};

export const asyncupdateproduct =(id , product)=>async(dispatch)=>{
    try {
        await axios.patch(`/product/${id}`,product);
        dispatch(asyncloadproducts());
        console.log("product updated");
    } catch (error) {
        console.log(error)
    }
}

export const asyncdeleteproduct =(id) => async(dispatch )=>{

    try {
        await axios.delete(`/product/${id}`)
        dispatch(asyncloadproducts());
        console.log("Product Deleted")
    } catch (error) {
        console.log(error)
    }
}