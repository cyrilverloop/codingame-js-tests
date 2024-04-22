import { assert } from 'chai';
import TestConfiguration from '../../lib/configuration/TestConfiguration.js';

suite("TestConfiguration", function() {

    test("Has a name", function() {
        const testConfiguration = new TestConfiguration('test-name', 'test-file');

        assert.strictEqual(testConfiguration.name, 'test-name');
    });

    test("Has a file", function() {
        const testConfiguration = new TestConfiguration('test-name', 'test-file');

        assert.strictEqual(testConfiguration.file, 'test-file');
    });
});
