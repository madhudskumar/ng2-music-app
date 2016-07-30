"use strict";
var Albumb = (function () {
    function Albumb(id, name, artist, url, images, songs) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.url = url;
        this.images = images;
        this.songs = songs;
    }
    ;
    Albumb.prototype.getImageSize = function (size) {
        var image = this.images.find(function (image) { return (image["size"] == size); });
        return image ? image["#text"] : undefined;
    };
    return Albumb;
}());
exports.Albumb = Albumb;
//# sourceMappingURL=albumb.class.js.map