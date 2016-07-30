import { iCountry } from './country.interface';

export class Country implements iCountry {
    constructor(
        public alpha2code : string,
        public name : string
    ){}
}