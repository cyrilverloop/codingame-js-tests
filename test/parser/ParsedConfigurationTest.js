import { assert } from 'chai';
import TestConfiguration from '../../lib/configuration/TestConfiguration.js';
import ParsedConfiguration from '../../lib/parser/ParsedConfiguration.js';

suite("ParsedConfiguration", function() {

    test("Has a path", function() {
        const testConfigurations = [
            new TestConfiguration('name', 'file')
        ];

        const parsedConfiguration = new ParsedConfiguration(
            'test-path',
            'test-name',
            'test-link',
            testConfigurations
        );

        assert.strictEqual(parsedConfiguration.path, 'test-path');
    });

    test("Has a name", function() {
        const testConfigurations = [
            new TestConfiguration('name', 'file')
        ];

        const parsedConfiguration = new ParsedConfiguration(
            'test-path',
            'test-name',
            'test-link',
            testConfigurations
        );

        assert.strictEqual(parsedConfiguration.name, 'test-name');
    });

    test("Has a link", function() {
        const testConfigurations = [
            new TestConfiguration('name', 'file')
        ];

        const parsedConfiguration = new ParsedConfiguration(
            'test-path',
            'test-name',
            'test-link',
            testConfigurations
        );

        assert.strictEqual(parsedConfiguration.link, 'test-link');
    });

    test("Has TestConfigurations", function() {
        const testConfigurations = [
            new TestConfiguration('name', 'file')
        ];

        const parsedConfiguration = new ParsedConfiguration(
            'test-path',
            'test-name',
            'test-link',
            testConfigurations
        );

        for(const testConfiguration of parsedConfiguration.testConfigurations) {
            assert.strictEqual(testConfiguration.name, 'name');
            assert.strictEqual(testConfiguration.file, 'file');
        }
    });
});
