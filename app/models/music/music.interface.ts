export interface iSong{
    name:string;
}

export interface iAlbumb{
    id: number,
    name: string,
    artist:string,
    url: string,
    images?: Array<string>,
    songs?: Array<iSong>;

    getImageSize(size:albumbImageSize);
}

export enum albumbImageSize{
    LARGE = <any>"large",
    MEDIUM = <any>"medium",
    SMALL = <any>"small",
}