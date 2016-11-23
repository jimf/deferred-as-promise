'use strict';

function collapseArgs(func) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length === 0) {
            func();
        } else if (args.length === 1) {
            func(args[0]);
        } else {
            func(args);
        }
    };
}

module.exports = function(deferred) {
    return new Promise(function(resolve, reject) {
        deferred
            .done(collapseArgs(resolve))
            .fail(collapseArgs(reject));
    });
};
