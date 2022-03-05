import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/easy/MIMEType/MIMEType.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "MIME type" puzzle.
 */
suite('MIME type', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple example', function() {
        let inputFile = new File(__dirname + 'input/01 - simple example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple example.txt');
    });

    test('Unknown MIME types', function() {
        let inputFile = new File(__dirname + 'input/02 - unknown MIME types.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - unknown MIME types.txt');
    });

    test('Correct division of the extension', function() {
        let inputFile = new File(__dirname + 'input/03 - correct division of the extension.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - correct division of the extension.txt');
    });

    test('Consideration of the case (upper or lower)', function() {
        let inputFile = new File(__dirname + 'input/04 - consideration of the case (upper or lower).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - consideration of the case (upper or lower).txt');
    });

    test('Large dataset', function() {
        let inputFile = new File(__dirname + 'input/05 - large dataset.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - large dataset.txt');
    });
});
