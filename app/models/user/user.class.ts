import { iUser } from './user.interface';

export class User implements iUser {
    username: string;
    email: string;
    password: string;
    country: string;
    birthday: Date;

    constructor(authData:any){
        this.email = authData.password.email;
    }
}
