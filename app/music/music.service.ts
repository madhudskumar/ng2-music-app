import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { iSong, iAlbumb } from './../models/music/music.interface';
import { Song } from './../models/music/song.class';
import { albumb } from './../models/music/albumb.class';
import { iPage } from './../models/pagination/pager.interface';
import { pager } from './../models/pagination/pager.class';

@Injectable()
export class  musicService{
    private appId = "5ab4e37f6ddb7981825f118352e63f19"

}
