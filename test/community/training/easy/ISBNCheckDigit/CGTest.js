import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/ISBNCheckDigit/ISBNCheckDigit.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('ISBN check digit', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example', function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test('Short', function() {
        let inputFile = new File(__dirname + 'input/02 - short.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - short.txt');
    });

    test('Longer', function() {
        let inputFile = new File(__dirname + 'input/03 - longer.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - longer.txt');
    });

    test('Much longer', function() {
        let inputFile = new File(__dirname + 'input/04 - much longer.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - much longer.txt');
    });
});
