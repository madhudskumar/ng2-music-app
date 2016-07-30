"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var country_class_1 = require('../models/country/country.class');
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var counttryService = (function () {
    function counttryService(_http) {
        this._http = _http;
    }
    counttryService.prototype.getCountries = function () {
        var _this = this;
        return new Rx_1.Observable(function (observable) {
            _this._http.get("https://restcountries.eu/rest/v1/all")
                .map(function (res) {
                res.json();
                var countries = [];
                res.forEach(function (data) {
                    countries.push(new country_class_1.Country(data.name, data.alpha2Code));
                });
                return countries;
            })
                .subscribe(function (res) {
                observable.next(res);
            });
        });
    };
    counttryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], counttryService);
    return counttryService;
}());
exports.counttryService = counttryService;
//# sourceMappingURL=country.service.js.map