import { iCountry } from '../models/country/country.interface'
import { Country } from '../models/country/country.class'
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class counttryService{
    constructor(
        private _http:Http
    ){}

    getCountries():Observable{
        return new Observable(observable => {
            this._http.get("https://restcountries.eu/rest/v1/all")
                .map(res => {
                    res.json();
                    var countries:Array<iCountry> = [];
                    res.forEach(data => {
                        countries.push(new Country(data.name, data.alpha2Code));
                    })
                    return countries
                })
                .subscribe(res => {
                    observable.next(res);
                })
        })
    }
}