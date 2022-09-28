import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/gravityTumbler/gravityTumbler.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Gravity tumbler", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Tumble", function() {
        let inputFile = new File(__dirname + 'input/01 - tumble.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - tumble.txt');
    });

    test("Double", function() {
        let inputFile = new File(__dirname + 'input/02 - double.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - double.txt');
    });

    test("Triple", function() {
        let inputFile = new File(__dirname + 'input/03 - triple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - triple.txt');
    });

    test("Whee!", function() {
        let inputFile = new File(__dirname + 'input/04 - whee!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - whee!.txt');
    });

    test("CodinGame 1", function() {
        let inputFile = new File(__dirname + 'input/05 - CodinGame 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - CodinGame 1.txt');
    });

    test("CodinGame 2", function() {
        let inputFile = new File(__dirname + 'input/06 - CodinGame 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - CodinGame 2.txt');
    });
});
