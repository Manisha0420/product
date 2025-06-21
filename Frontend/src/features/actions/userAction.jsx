import axios from "../../api/Config";
import {loginuser, logoutuser} from "../../features/reducers/userSlice"

export const asynccurrentuser = ( ) => async(dispatch ,getState)=>{
     try {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            dispatch(loginuser(user));
            console.log("Session restore!")
        }else{
            console.log("No user found ")
        }
        
     } catch (error) {
        console.log(error)
     }
};

export const asyncsigninuser = (user)=> async(dispatch ,getState) =>{
    try {
        
        const { data} = await axios.get(
            "/users?email=" + user.email + "&password=" + user.password
        )
        console.log(data);
        if(data[0]){
            localStorage.setItem('user', JSON.stringify(data[0]))
            dispatch(asynccurrentuser())
            console.log("User Logged In!")
        }else{
            console.log("Invalid credentials")
        }

    } catch (error) {
        console.log(error)
    }
}

export const asyncsignupuser = (user) => async (dispatch , getState ) =>{
    try {
        await axios.post('/users',user);
        console.log('User registered!')
    } catch (error) {
        console.log(error)
    }
}

export const asynclogoutuser = (  ) => async ( dispatch ,getState) =>{
    try {
        localStorage.removeItem("user")
        dispatch(logoutuser());
        console.log("User logged out!")
    } catch (error) {
        console.log(error)
    }
}

export const asyncupdateuser = ( id,user ) => async (dispatch ) =>{
    try {
        const { data } = await axios.patch("/users/"+id, user);
        localStorage.setItem("user" ,JSON.stringify(data));
        dispatch(asynccurrentuser());
        console.log(" User Updated!")
    } catch (error) {
        console.log(error)
    }
}

export const asyncdeleteuser = ( id ) => async(dispatch )=>{
    try {
        await axios.delete("/users/"+id);
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("User deleted")
    } catch (error) {
        console.log(error)
    }
}