import axios from "../../api/Config";
// import {loginuser ,logoutuser } from '../reducers/userSlice';

export const asyncsigninuser = (user)=> (dispatch ,getState) =>{
    try {
        
        const { data} = await axios.get(
            "/users?email= " +user.email + "&password=" +user.password
        )
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}

export const asyncsignupuser = () => async ( ) =>{
    try {
        await axios.post('users', user);
        console.log('User registered!')
    } catch (error) {
        console.log(error)
    }
}