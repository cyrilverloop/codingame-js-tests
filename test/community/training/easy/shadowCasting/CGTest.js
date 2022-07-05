import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/shadowCasting/shadowCasting.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Shadow casting", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("X", function() {
        let inputFile = new File(__dirname + 'input/01 - X.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - X.txt');
    });

    test("Square", function() {
        let inputFile = new File(__dirname + 'input/02 - square.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - square.txt');
    });

    test("Coding games", function() {
        let inputFile = new File(__dirname + 'input/03 - coding games.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - coding games.txt');
    });

    test("ASCII", function() {
        let inputFile = new File(__dirname + 'input/04 - ASCII.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - ASCII.txt');
    });
});
