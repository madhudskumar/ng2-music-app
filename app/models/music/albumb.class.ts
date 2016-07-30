import {iAlbumb, albumbImageSize} from './music.interface';
import { iSong } from './music.interface';

export class albumb implements iAlbumb{

    constructor(
        public id: number,
        public name: string,
        public artist:string,
        public url: string,
        public images?: Array<string>,
        public songs?: Array<iSong>
    ){};

    getImageSize(size:albumbImageSize){
        let image = this.images.find((image) => (image["size"] == size));
        return image ? image["#text"]: undefined;
    }
}