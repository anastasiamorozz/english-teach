import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    errorMessage: string | null = null;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool: boolean){
        this.isAuth = bool;
    }

    setUser(user: IUser){
        this.user = user;
    }

    setErrorMessage(message: string | null) {
        this.errorMessage = message;
    }

    async login(email: string, password: string){
        try{
            const response = await AuthService.login(email, password);
            console.log(response);
            if(response.data.message==="User with that email doesn't exists"){
                this.setErrorMessage(`User with email ${email} doesn't exists`);
                return;
            }
            if(response.data.message==="Wrong password"){
                this.setErrorMessage(`Wrong password`);
                return;
            }
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            this.setErrorMessage(null)
        }catch(e){
            console.log(e);
            this.setErrorMessage('An error occurred during login. Please try again.');
        }
    }

    async registration(email: string, password: string, firstName:string, lastName:string){
        try{
            const response = await AuthService.registration(email, password, firstName, lastName);
            if(response.data.message==="User already exists"){
                this.setErrorMessage(`User with email ${email} already exists`);
                return;
            }
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch(e){
            console.log(e)
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        }catch(e){
            console.log(e)
        }
    }

    async checkAuth(){
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            // if(response){
            //     this.setAuth(true);
            //     this.setUser(response.data.user);
            // }
        }catch(e){
            console.log(e)
        }
    }
}