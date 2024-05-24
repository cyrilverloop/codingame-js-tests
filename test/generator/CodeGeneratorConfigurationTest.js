import { assert } from 'chai';
import CodeGeneratorConfiguration from '../../lib/generator/CodeGeneratorConfiguration.js';

suite("CodeGeneratorConfiguration", function() {

    test("Has a name", function() {
        const codeGeneratorConfiguration = new CodeGeneratorConfiguration(
            'test-name',
            'test-link',
            'test-defaultCode'
        );

        assert.strictEqual(codeGeneratorConfiguration.name, 'test-name');
    });

    test("Has a link", function() {
        const codeGeneratorConfiguration = new CodeGeneratorConfiguration(
            'test-name',
            'test-link',
            'test-defaultCode'
        );

        assert.strictEqual(codeGeneratorConfiguration.link, 'test-link');
    });

    test("Has a default code", function() {
        const codeGeneratorConfiguration = new CodeGeneratorConfiguration(
            'test-name',
            'test-link',
            'test-defaultCode'
        );

        assert.strictEqual(codeGeneratorConfiguration.defaultCode, 'test-defaultCode');
    });
});
