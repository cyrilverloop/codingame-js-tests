import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/windmillProblem/windmillProblem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Windmill problem", function() {
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

    test("Parallelogram", function() {
        let inputFile = new File(__dirname + 'input/02 - parallelogram.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - parallelogram.txt');
    });

    test("10 random points", function() {
        let inputFile = new File(__dirname + 'input/03 - 10 random points.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 10 random points.txt');
    });

    test("Large", function() {
        let inputFile = new File(__dirname + 'input/04 - large.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - large.txt');
    });

    test("Infinite loop", function() {
        let inputFile = new File(__dirname + 'input/05 - infinite loop.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - infinite loop.txt');
    });

    test("Smarter approach required", function() {
        let inputFile = new File(__dirname + 'input/06 - smarter approach required.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - smarter approach required.txt');
    });

    test("Convex hull", function() {
        let inputFile = new File(__dirname + 'input/07 - convex hull.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - convex hull.txt');
    });
});
