'use strict';

module.exports = function(deferred) {
    return new Promise(function(resolve, reject) {
        deferred.done(resolve).fail(reject);
    });
};
