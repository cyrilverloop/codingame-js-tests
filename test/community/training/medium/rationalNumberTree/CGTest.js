import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/rationalNumberTree/rationalNumberTree.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Rational number tree", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Examples", function() {
        let inputFile = new File(__dirname + 'input/01 - examples.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - examples.txt');
    });

    test("Near the root 1", function() {
        let inputFile = new File(__dirname + 'input/02 - near the root 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - near the root 1.txt');
    });

    test("Near the root 2", function() {
        let inputFile = new File(__dirname + 'input/03 - near the root 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - near the root 2.txt');
    });

    test("Longer and Bigger", function() {
        let inputFile = new File(__dirname + 'input/04 - longer and bigger.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - longer and bigger.txt');
    });

    test("Big big numbers", function() {
        let inputFile = new File(__dirname + 'input/05 - big big numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - big big numbers.txt');
    });

    test("Long long path", function() {
        let inputFile = new File(__dirname + 'input/06 - long long path.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - long long path.txt');
    });
});
