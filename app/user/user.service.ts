import { Observable } from 'rxjs/observable';
import { iUser } from '../models/user/user.interface';
import { User } from '../models/user/user.class';
import {error} from "util";

export class userServices{

    firebaseUrl:string = "http://ng2-music.firebaseio.com";
    firebaseRef:Firebase;

    constructor(){
        this.firebaseRef = new Firebase(this.firebaseUrl);
    }

    getUser() : Observable{
        return new Observable(observable => {
            this.firebaseRef.onAuth(authData => {
                let authData = this.firebaseRef.getAuth();
                let user;
                if(authData){
                    user = new User(authData);
                }

                observable.next(authData);
            });
        });
    }

    login(userName:string, password:string) : Observable {
        return new Observable(observable => {
            this.firebaseRef.authWithPassword({
                email : userName,
                password : password
            }, (error, authData) => {
                if(error){
                    observable.error(error);
                }else{
                    observable.next(authData);
                }
            })
        })
    }

    register(userName:string, email:string, password:string, country?:string, birthday?:Date) : Observable{
        return new Observable(observable => {
            this.firebaseRef.createUser({
                userName:userName,
                email:email,
                password:password
            }, (error, userData) => {
                if(error) observable.error(error);
                else observable.next(userData);
            })
        })
    }

    logout(): Observable{
        return new Observable(observable => {
            this.firebaseRef.unauth();
            observable.next();
        });
    }
}