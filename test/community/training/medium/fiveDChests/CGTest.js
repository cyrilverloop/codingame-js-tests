import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/fiveDChests/fiveDChests.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("5D chests", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("N=5", function() {
        let inputFile = new File(__dirname + 'input/01 - N=5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - N=5.txt');
    });

    test("N=10", function() {
        let inputFile = new File(__dirname + 'input/02 - N=10.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - N=10.txt');
    });

    test("N=15", function() {
        let inputFile = new File(__dirname + 'input/03 - N=15.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - N=15.txt');
    });

    test("N=20", function() {
        let inputFile = new File(__dirname + 'input/04 - N=20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - N=20.txt');
    });
});
