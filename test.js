'use strict';

var test = require('tape'),
    $ = require('jquery-deferred'),
    deferredAsPromise = require('./');

test('$.Deferred as a promise - no args', function(t) {
    t.plan(2);

    var deferredSuccess = $.Deferred();
    var deferredError = $.Deferred();

    deferredAsPromise(deferredSuccess)
        .then(function(result) {
            t.equal(result, undefined, 'resolves with undefined');
        })
        .catch(function() {
            t.fail('should resolve');
        });

    deferredAsPromise(deferredError)
        .then(function() {
            t.fail('should reject');
        })
        .catch(function(error) {
            t.equal(error, undefined, 'rejects with undefined');
        });

    deferredSuccess.resolve();
    deferredError.reject();
});

test('$.Deferred as a promise - 1 arg', function(t) {
    t.plan(2);

    var deferredSuccess = $.Deferred();
    var deferredError = $.Deferred();

    deferredAsPromise(deferredSuccess)
        .then(function(result) {
            t.equal(result, 'success', 'resolves with value');
        })
        .catch(function() {
            t.fail('should resolve');
        });

    deferredAsPromise(deferredError)
        .then(function() {
            t.fail('should reject');
        })
        .catch(function(error) {
            t.equal(error, 'error', 'rejects with error');
        });

    deferredSuccess.resolve('success');
    deferredError.reject('error');
});

test('$.Deferred as a promise - multiple args', function(t) {
    t.plan(2);

    var deferredSuccess = $.Deferred();
    var deferredError = $.Deferred();

    deferredAsPromise(deferredSuccess)
        .then(function(result) {
            t.deepEqual(result, ['success1', 'success2'],
                'resolves with array of values');
        })
        .catch(function() {
            t.fail('should resolve');
        });

    deferredAsPromise(deferredError)
        .then(function() {
            t.fail('should reject');
        })
        .catch(function(error) {
            t.deepEqual(error, ['error1', 'error2'],
                'rejects with array of errors');
        });

    deferredSuccess.resolve('success1', 'success2');
    deferredError.reject('error1', 'error2');
});
