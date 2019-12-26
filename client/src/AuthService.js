import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/';

class AuthService {

    getLsKey () {
        return 'jwt';
    }

    checkJWT () {
        return localStorage.getItem(this.getLsKey())
    }

    login(credentials){
        return axios.post(API_BASE_URL + "login", credentials);
    }

    fetchDocs() {
        return axios.get(API_BASE_URL + "document", this.getAuthHeader());
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem(this.getLsKey()));
    }

    getAuthHeader() {
        let token = "";
        if (this.getUserInfo()) {
            token = this.getUserInfo().token;
        }
       return {headers: {Authorization: 'Bearer ' + token }};
    }

    logOut() {
        localStorage.removeItem(this.getLsKey());
        return axios.post(API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();