import { assert } from 'chai';
import GeneratorCodeConfiguration from '../../lib/generator/GeneratorCodeConfiguration.js';

suite("GeneratorCodeConfiguration", function() {

    test("Has a path", function() {
        const generatorCodeConfiguration = new GeneratorCodeConfiguration(
            'test-path',
            'test-name',
            'test-link',
            'test-defaultCode'
        );

        assert.strictEqual(generatorCodeConfiguration.path, 'test-path');
    });

    test("Has a name", function() {
        const generatorCodeConfiguration = new GeneratorCodeConfiguration(
            'test-path',
            'test-name',
            'test-link',
            'test-defaultCode'
        );

        assert.strictEqual(generatorCodeConfiguration.name, 'test-name');
    });

    test("Has a link", function() {
        const generatorCodeConfiguration = new GeneratorCodeConfiguration(
            'test-path',
            'test-name',
            'test-link',
            'test-defaultCode'
        );

        assert.strictEqual(generatorCodeConfiguration.link, 'test-link');
    });

    test("Has a default code", function() {
        const generatorCodeConfiguration = new GeneratorCodeConfiguration(
            'test-path',
            'test-name',
            'test-link',
            'test-defaultCode'
        );

        assert.strictEqual(generatorCodeConfiguration.defaultCode, 'test-defaultCode');
    });
});
