import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { iSong, iAlbumb } from './../models/music/music.interface';
import { Song } from './../models/music/song.class';
import { Albumb } from './../models/music/albumb.class';
import { iPage } from './../models/pagination/pager.interface';
import { Pager } from './../models/pagination/pager.class';

@Injectable()
export class  musicService{
    private appId = "5ab4e37f6ddb7981825f118352e63f19";
    constructor(
        private _http:Http
    ){}

    albumbSearch(query:string, page:number = 0) : Observable{
        return new Observable(observable => {
            let pageParam:string = page + 1;
            let url = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&page" + pageParam + "&format=json&api_key=" + this.appId;
            this._http.get(url)
                .map(res => {
                    res = res.json();
                    var albumbs:Array<Albumb> = [];
                    let results = res.results;
                    results.albumbmatches.albumb.forEach(data => {
                        albumbs.push(new Albumb(data["mbid"], data["name"], data["artist"], data["url"], data["image"]));
                    });
                    let pager:iPage = new Pager(<number>results["openserch:itemsParPage"], <number>results["opensearch:startIndex"], <number>results["opensearch:totalResults"]);
                    return{
                        albumbs : albumbs,
                        pager : pager
                    }
                })
                .subscribe(res => {
                    observable.next(res);
                });
        });
    }

    albumbInfo(id:string) : Observable{
        return new Observable(observable => {
            let url:string = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid" + id + "&format=json&api_key=" + this.appId;
            this._http.get(url)
                .map(res => {
                    res = res.json();
                    let data = res.album;

                    var songs:Array<iSong> = {};
                    data.tracks.track.forEach(data => {
                        songs.push(new Song(data.name));
                    });

                    return new Albumb(data["mbid"], data["name"], data["artist"], data["url"], data["image"]);
                })
                .subscribe(res => {
                    observable.next(res);
                });
        })
    }
}
