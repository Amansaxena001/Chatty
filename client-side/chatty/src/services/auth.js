import axios from 'axios'
import getJWT from '../helpers/jwt'
const API_URL="http://localhost:5000/getToken";

class Authservice{
    login(email,password){
        return axios
        .post(API_URL,{
            email,
            password

        })
        .then(res=>{
            var Jwt=JSON.stringify(res.data)
            localStorage.setItem('JWT',Jwt)
        })
    }

    logout(){
        localStorage.removeItem(getJWT)
    }

}

export default new Authservice();