import { iPage } from './pager.interface';

export class pager implements iPage{
    public pages: number = 0;

    constructor(
        public itemsPerPage: number,
        public startIndex: number,
        public totalResults: number,
        public maxPages : number = 10
    ){
        let realMaxPages = Math.ceil(this.totalResults/this.itemsPerPage);
        this.pages = realMaxPages <= this.maxPages ? realMaxPages : this.maxPages;
    }
}