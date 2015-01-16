'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.exporter = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    testHTML: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/test.html');
        var expected = grunt.file.read('test/expected/test.html');
        test.equal(actual, expected, 'should copy hole HTML to file.');
        test.done();
    },
    testJS: function (test) {
        test.expect(1);

        var actualJS = grunt.file.read('tmp/header.js');
        var expectedJS = grunt.file.read('test/expected/header.js');
        test.equal(actualJS, expectedJS, 'should copy hole JS to file.');

        test.done();
    },
    testLESS: function (test) {
        test.expect(1);

        var actualLESS = grunt.file.read('tmp/header.less');
        var expectedLESS = grunt.file.read('test/expected/header.less');
        test.equal(actualLESS, expectedLESS, 'should copy hole JS to file.');

        test.done();
    }
};
