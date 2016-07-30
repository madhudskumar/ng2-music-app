"use strict";
var observable_1 = require('rxjs/observable');
var user_class_1 = require('../models/user/user.class');
var userServices = (function () {
    function userServices() {
        this.firebaseUrl = "http://ng2-music.firebaseio.com";
        this.firebaseRef = new Firebase(this.firebaseUrl);
    }
    userServices.prototype.getUser = function () {
        var _this = this;
        return new observable_1.Observable(function (observable) {
            _this.firebaseRef.onAuth(function (authData) {
                var authData = _this.firebaseRef.getAuth();
                var user;
                if (authData) {
                    user = new user_class_1.User(authData);
                }
                observable.next(authData);
            });
        });
    };
    userServices.prototype.login = function (userName, password) {
        var _this = this;
        return new observable_1.Observable(function (observable) {
            _this.firebaseRef.authWithPassword({
                email: userName,
                password: password
            }, function (error, authData) {
                if (error) {
                    observable.error(error);
                }
                else {
                    observable.next(authData);
                }
            });
        });
    };
    userServices.prototype.register = function (userName, email, password, country, birthday) {
        var _this = this;
        return new observable_1.Observable(function (observable) {
            _this.firebaseRef.createUser({
                userName: userName,
                email: email,
                password: password
            }, function (error, userData) {
                if (error)
                    observable.error(error);
                else
                    observable.next(userData);
            });
        });
    };
    userServices.prototype.logout = function () {
        var _this = this;
        return new observable_1.Observable(function (observable) {
            _this.firebaseRef.unauth();
            observable.next();
        });
    };
    return userServices;
}());
exports.userServices = userServices;
//# sourceMappingURL=user.service.js.map