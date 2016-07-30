"use strict";
var albumb = (function () {
    function albumb(id, name, artist, url, images, songs) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.url = url;
        this.images = images;
        this.songs = songs;
    }
    ;
    albumb.prototype.getImageSize = function (size) {
        var image = this.images.find(function (image) { return (image["size"] == size); });
        return image ? image["#text"] : undefined;
    };
    return albumb;
}());
exports.albumb = albumb;
//# sourceMappingURL=albumb.class.js.map