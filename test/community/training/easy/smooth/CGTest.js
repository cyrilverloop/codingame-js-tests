import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/smooth/smooth.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Smooth!", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small bulk", function() {
        let inputFile = new File(__dirname + 'input/01 - small bulk.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - small bulk.txt');
    });

    test("Easy victories", function() {
        let inputFile = new File(__dirname + 'input/02 - easy victories.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - easy victories.txt');
    });

    test("Easy defeats", function() {
        let inputFile = new File(__dirname + 'input/03 - easy defeats.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - easy defeats.txt');
    });

    test("Bigger", function() {
        let inputFile = new File(__dirname + 'input/04 - bigger.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - bigger.txt');
    });
});
