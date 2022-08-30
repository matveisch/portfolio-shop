export const SERVER_URL = "http://89.108.88.213:8006"; // Урл без слеша в конце

export class HTTP{

    static getToken(){
        //не знаю, нужен ли localStorage.getItem без return
        // localStorage.getItem("token");
        return ( localStorage.getItem("token"))
    }

    static getType(){
        localStorage.getItem("type");
    }

    static setToken(token){
        localStorage.setItem("token", token);
    }

    static setType(type){
        localStorage.setItem("type", type);
    }

    static deleteType(){
        localStorage.removeItem("type");
    }

    static deleteToken(){
        localStorage.removeItem("token");
    }

    static deleteEntrepreneurship(){
        localStorage.removeItem('entrepreneurship');
    }

    static deleteId(){
        localStorage.removeItem('id')
    }

    static deleteLocalItems(itemArray){
        for (let item of itemArray){
            if (localStorage.getItem(item) !== undefined){
                localStorage.removeItem(item);
            }
        }
    }

    static async createUserValidate(data){
        const validate = await fetch(SERVER_URL + "/api/auth/users/validate/", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => {
            if (r.ok){
                if (r.status == 200){
                    return r.json()
                }
                else{
                    return {success: "success"};
                }
            }
            else{
                return false;
            }
        });
        return validate;
    }

    static async createUser(data){
        try{
            await fetch(SERVER_URL + "/api/auth/users/", {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => {
                if (r.ok){
                    return r.json();
                }
                else{
                    throw r;
                }
            });
        }
        catch(error){
            return error.json();
        }
    }

    static async getLogin(url, data){
        const returnData = await fetch(SERVER_URL + url, {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => {
            if (r.auth_token !== undefined){
                this.setToken(r.auth_token);
            }
            if (r.id !== undefined){
                localStorage.setItem("id", r.id);
            }
            // if (!r.ok) {
            //     r.json().then(r => console.log(r.non_field_errors))
            // }
            return r.json();
        })

        return returnData;
    }

    static async logOut(){
        await fetch(SERVER_URL + "/api/auth/token/logout/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${this.getToken()}`
            }
        }).then(r => {
            this.deleteToken();
            // this.deleteType();
            this.deleteId();
        });
    }

    static async Post(url, data){
        await fetch(SERVER_URL + url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${this.getToken()}`
            }
        }).then(r => {
            localStorage.setItem('pweb_status', r.status);
        });
    }

    static async UserCreate(url, data){
        await fetch(SERVER_URL + url, {
            method: "POST",
            body: data,
            headers: {
                Authorization: `Token ${this.getToken()}`
            }
        }).then(r => {
            
        });
    }

    static async Get(url){
        const responce = await fetch(SERVER_URL + url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${this.getToken()}`
            }
        }).then(r => {
            if (!r.ok) {
                // window.location.href = '/404';
                throw Error;
            }

            return r.json();
        });
        return responce;
    }

    static async Update(method, url, data){
        const resp = await fetch(SERVER_URL + url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                Authorization: `Token ${this.getToken()}`,
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.clone().json();
        });
        return resp;
    }

    static async UpdateProfile(method, url, data){
        const resp = await fetch(SERVER_URL + url, {
            method: method,
            body: data,
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Token ${this.getToken()}`,
            }
        }).then(res => {
            return res.clone().json();
        });
        return resp;
    }
}