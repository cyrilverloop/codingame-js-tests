import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/cubicBezierCurves/cubicBezierCurves.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Cubic Bézier curves", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple with low resolution", function() {
        let inputFile = new File(__dirname + 'input/01 - simple with low resolution.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple with low resolution.txt');
    });

    test("Inverted control points", function() {
        let inputFile = new File(__dirname + 'input/02 - inverted control points.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - inverted control points.txt');
    });

    test("Close loop", function() {
        let inputFile = new File(__dirname + 'input/03 - close loop.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - close loop.txt');
    });

    test("Only extremes", function() {
        let inputFile = new File(__dirname + 'input/04 - only extremes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - only extremes.txt');
    });

    test("High resolution", function() {
        let inputFile = new File(__dirname + 'input/05 - high resolution.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - high resolution.txt');
    });

    test("High resolution 2", function() {
        let inputFile = new File(__dirname + 'input/06 - high resolution 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - high resolution 2.txt');
    });
});
