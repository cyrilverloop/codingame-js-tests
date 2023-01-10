import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/threeDPrinter/threeDPrinter.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("3D printer", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("Weird shape", function() {
        let inputFile = new File(__dirname + 'input/02 - weird shape.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - weird shape.txt');
    });

    test("WHAT THE...", function() {
        let inputFile = new File(__dirname + 'input/03 - WHAT THE.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - WHAT THE.txt');
    });

    test("Hole", function() {
        let inputFile = new File(__dirname + 'input/04 - hole.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - hole.txt');
    });

    test("Cube with a hole", function() {
        let inputFile = new File(__dirname + 'input/05 - cube with a hole.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - cube with a hole.txt');
    });

    test("A mug???", function() {
        let inputFile = new File(__dirname + 'input/06 - a mug???.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - a mug???.txt');
    });

    test("A chair", function() {
        let inputFile = new File(__dirname + 'input/07 - a chair.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - a chair.txt');
    });
});
