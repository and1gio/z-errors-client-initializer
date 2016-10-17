'use strict';

module.exports = {
    run: function (app, next) {
        var ZErrorsClient = require("z-errors-client");
        app.zErrorsClient = new ZErrorsClient(app.config.zErrorsClient);
        app.zErrorsClient.load(function (err, res) {
            if (err) {
                app.logger.warn('ERRORS CLIENT', err);
            }
        });
        next();
    }
};