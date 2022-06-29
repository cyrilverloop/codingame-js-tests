import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/secondDegreePolynomialSimpleAnalysis/secondDegreePolynomialSimpleAnalysis.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("2nd degree polynomial - simple analysis", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Centered parabol, 1 intersection", function() {
        let inputFile = new File(__dirname + 'input/01 - centered parabol, 1 intersection.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "(0,1)"
        );
    });

    test("Horizontal line, 1 intersection to be rounded", function() {
        let inputFile = new File(__dirname + 'input/02 - horizontal line, 1 intersection to be rounded.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "(0,1.34)"
        );
    });

    test("Straight line, 2 intersections", function() {
        let inputFile = new File(__dirname + 'input/03 - straight line, 2 intersections.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "(0,2),(2,0)"
        );
    });

    test("Centered parabol, 3 intersections", function() {
        let inputFile = new File(__dirname + 'input/04 - centered parabol, 3 intersections.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "(-0.5,0),(0,-0.75),(0.5,0)"
        );
    });

    test("Parabol on the right, 2 intersections", function() {
        let inputFile = new File(__dirname + 'input/05 - parabol on the right, 2 intersections.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "(0,1),(1,0)"
        );
    });

    test("Special case", function() {
        let inputFile = new File(__dirname + 'input/06 - special case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "(0,0)"
        );
    });
});
