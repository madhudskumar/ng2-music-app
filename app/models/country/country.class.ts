import { iCountry } from './country.interface';

export class country implements iCountry {
    constructor(
        public alpha2code : string,
        public name : string
    ){}
}