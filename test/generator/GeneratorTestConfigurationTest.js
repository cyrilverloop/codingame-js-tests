import { assert } from 'chai';
import TestConfiguration from '../../lib/configuration/TestConfiguration.js';
import GeneratorTestConfiguration from '../../lib/generator/GeneratorTestConfiguration.js';

suite("GeneratorTestConfiguration", function() {

    test("Has a path", function() {
        const testConfigurations = [
            new TestConfiguration('name', 'file')
        ];

        const generatorTestConfiguration = new GeneratorTestConfiguration(
            'test-path',
            'test-name',
            testConfigurations
        );

        assert.strictEqual(generatorTestConfiguration.path, 'test-path');
    });

    test("Has a name", function() {
        const testConfigurations = [
            new TestConfiguration('name', 'file')
        ];

        const generatorTestConfiguration = new GeneratorTestConfiguration(
            'test-path',
            'test-name',
            testConfigurations
        );

        assert.strictEqual(generatorTestConfiguration.name, 'test-name');
    });

    test("Has test configurations", function() {
        const testConfigurations = [
            new TestConfiguration('name', 'file')
        ];

        const generatorTestConfiguration = new GeneratorTestConfiguration(
            'test-path',
            'test-name',
            testConfigurations
        );

        for(const testConfiguration of generatorTestConfiguration.testConfigurations) {
            assert.strictEqual(testConfiguration.name, 'name');
            assert.strictEqual(testConfiguration.file, 'file');
        }
    });
});
