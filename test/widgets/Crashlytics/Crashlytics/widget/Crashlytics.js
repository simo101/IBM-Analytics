define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

], function(declare, _WidgetBase) {
    "use strict";

    return declare("Crashlytics.widget.Crashlytics", [_WidgetBase], {

        skip: "",
        checkMessages: [],

        constructor: function() {

        },

        postCreate: function() {
            if (window.fabric && window.fabric.Crashlytics) {
                this._wrapConsoleError();
                this.checkMessages = this.skip.split("|");
            }
        },

        _wrapConsoleError: function() {
            console.log("Overriding console.error Crashlytics logging")
            console._error = console.error;
            console.error = function(err) {
                console._error(err);
                this._reportError(err);
            }.bind(this);
        },

        _reportError: function(error) {
            try {
                var errorLower = error.toLowerCase();
                for (var i = 0; i < this.checkMessages.length; i++) {
                    var msg = this.checkMessages[i].toLowerCase();
                    if (errorLower.indexOf(msg) != -1) {
                        return;
                    }
                }

                window.fabric.Crashlytics.setUserName(mx.session.getUserName());
                try {
                    var currentPage = mx.router._contentForm.path.replace(".page.xml", "");
                    window.fabric.Crashlytics.setStringValueForKey("CurrentPage", currentPage);
                } catch (e) {

                }
                window.fabric.Crashlytics.setStringValueForKey("MendixVersion", mx.version);
                console.log("sending " + error);
                window.fabric.Crashlytics.addLog(error);
                window.fabric.Crashlytics.sendNonFatalCrash("Error message");
            } catch (e) {
                console._error("Something went wrong while handling error");
            }
        }

    });
});

require(["Crashlytics/widget/Crashlytics"]);
