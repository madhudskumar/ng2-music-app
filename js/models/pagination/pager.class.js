"use strict";
var pager = (function () {
    function pager(itemsPerPage, startIndex, totalResults, maxPages) {
        if (maxPages === void 0) { maxPages = 10; }
        this.itemsPerPage = itemsPerPage;
        this.startIndex = startIndex;
        this.totalResults = totalResults;
        this.maxPages = maxPages;
        this.pages = 0;
        var realMaxPages = Math.ceil(this.totalResults / this.itemsPerPage);
        this.pages = realMaxPages <= this.maxPages ? realMaxPages : this.maxPages;
    }
    return pager;
}());
exports.pager = pager;
//# sourceMappingURL=pager.class.js.map