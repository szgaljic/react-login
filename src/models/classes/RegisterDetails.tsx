import {UserDetails} from '../interfaces/UserDetails';


export class RegisterDetails implements UserDetails {

  constructor(public email: string, public username: string, private password: string) {}

}
