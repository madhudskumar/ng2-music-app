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
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var song_class_1 = require('./../models/music/song.class');
var albumb_class_1 = require('./../models/music/albumb.class');
var pager_class_1 = require('./../models/pagination/pager.class');
var musicService = (function () {
    function musicService(_http) {
        this._http = _http;
        this.appId = "5ab4e37f6ddb7981825f118352e63f19";
    }
    musicService.prototype.albumbSearch = function (query, page) {
        var _this = this;
        if (page === void 0) { page = 0; }
        return new Observable_1.Observable(function (observable) {
            var pageParam = page + 1;
            var url = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&page" + pageParam + "&format=json&api_key=" + _this.appId;
            _this._http.get(url)
                .map(function (res) {
                res = res.json();
                var albumbs = [];
                var results = res.results;
                results.albumbmatches.albumb.forEach(function (data) {
                    albumbs.push(new albumb_class_1.Albumb(data["mbid"], data["name"], data["artist"], data["url"], data["image"]));
                });
                var pager = new pager_class_1.Pager(results["openserch:itemsParPage"], results["opensearch:startIndex"], results["opensearch:totalResults"]);
                return {
                    albumbs: albumbs,
                    pager: pager
                };
            })
                .subscribe(function (res) {
                observable.next(res);
            });
        });
    };
    musicService.prototype.albumbInfo = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            var url = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid" + id + "&format=json&api_key=" + _this.appId;
            _this._http.get(url)
                .map(function (res) {
                res = res.json();
                var data = res.album;
                var songs = [];
                data.tracks.track.forEach(function (data) {
                    songs.push(new song_class_1.Song(data.name));
                });
                return new albumb_class_1.Albumb(data["mbid"], data["name"], data["artist"], data["url"], data["image"]);
            })
                .subscribe(function (res) {
                observable.next(res);
            });
        });
    };
    musicService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], musicService);
    return musicService;
}());
exports.musicService = musicService;
//# sourceMappingURL=music.service.js.map