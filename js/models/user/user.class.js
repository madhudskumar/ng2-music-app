"use strict";
var User = (function () {
    function User(authData) {
        this.email = authData.password.email;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.class.js.map