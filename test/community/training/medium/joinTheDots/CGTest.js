import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/joinTheDots/joinTheDots.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Join the dots", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Square of 4", function() {
        let inputFile = new File(__dirname + 'input/01 - square of 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - square of 4.txt');
    });

    test("Zig-zag", function() {
        let inputFile = new File(__dirname + 'input/02 - zig-zag.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - zig-zag.txt');
    });

    test("X marks the spot", function() {
        let inputFile = new File(__dirname + 'input/03 - x marks the spot.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - x marks the spot.txt');
    });

    test("Plus one", function() {
        let inputFile = new File(__dirname + 'input/04 - plus one.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - plus one.txt');
    });

    test("Inspire", function() {
        let inputFile = new File(__dirname + 'input/05 - inspire.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - inspire.txt');
    });

    test("Unicorn-ish", function() {
        let inputFile = new File(__dirname + 'input/06 - unicorn-ish.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - unicorn-ish.txt');
    });

    test("Butterfly", function() {
        let inputFile = new File(__dirname + 'input/07 - butterfly.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - butterfly.txt');
    });
});
