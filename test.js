'use strict';

var test = require('tape'),
    $ = require('jquery-deferred'),
    deferredAsPromise = require('./');

test('$.Deferred as a promise', function(t) {
    t.plan(2);

    var deferredSuccess = $.Deferred();
    var deferredError = $.Deferred();

    deferredAsPromise(deferredSuccess)
        .then(function(result) {
            t.equal(result, 'success');
        })
        .catch(function() {
            t.fail('should resolve');
        });

    deferredAsPromise(deferredError)
        .then(function() {
            t.fail('should reject');
        })
        .catch(function(error) {
            t.equal(error, 'error');
        });

    deferredSuccess.resolve('success');
    deferredError.reject('error');
});
