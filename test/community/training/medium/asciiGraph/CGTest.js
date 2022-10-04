import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/asciiGraph/asciiGraph.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Ascii graph", function() {
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

    test("No points", function() {
        let inputFile = new File(__dirname + 'input/02 - no points.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - no points.txt');
    });

    test("Negative values", function() {
        let inputFile = new File(__dirname + 'input/03 - negative values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - negative values.txt');
    });

    test("Two points", function() {
        let inputFile = new File(__dirname + 'input/04 - two points.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - two points.txt');
    });

    test("Many points", function() {
        let inputFile = new File(__dirname + 'input/05 - many points.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - many points.txt');
    });

    test("Point at origin", function() {
        let inputFile = new File(__dirname + 'input/06 - point at origin.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - point at origin.txt');
    });
});
