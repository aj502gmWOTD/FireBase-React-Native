import react, {createContext, useState} from "react";
import auth from "@react-native-firebase/auth";

export const authContext = createContext("ffdsajfhds");

export const AuthProvider =({children}) => {
    const [user, setUser] = useState(null);
    const login = async (email,pass)=>{
        try{
            await auth().signInWithEmailAndPassword(email,pass);
            console.log("exito")
        }catch(e){
            console.log(e);
        }
    }
    return(
        <authContext.Provider  
            value = {{
                user,
                setUser,
                login,
                }}
        >
           
           {children}
        </authContext.Provider>
    )
}
/*
register: async (email, pass)=>{
                    try{
                        await auth().createUserWithEmailAndPassword(email,pass);
                    }catch(e){
                        console.log(e);
                    }
                },
                logout: async()=>{
                    try{
                        await auth.signOut();
                    }catch(e){
                        console.log(e);
                    }
                }

*/
