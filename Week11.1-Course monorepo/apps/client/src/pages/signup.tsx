import {Signup} from "ui";
import axios from "axios";
 
export default function SigninPage(){
    return <div>
        <Signup 
        onClick={async (username:string,password:string)=>{
            const response= await axios.post("/api/signup",{
                username,
                password
            });
            localStorage.setItem("token", response.data.token);      
        }}
        />
    </div>
}