import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/natureOfQuadrilaterals/natureOfQuadrilaterals.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Nature of quadrilaterals", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Quadrilateral", function() {
        let inputFile = new File(__dirname + 'input/01 - quadrilateral.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ABCD is a quadrilateral."
        );
    });

    test("Parallelogram", function() {
        let inputFile = new File(__dirname + 'input/02 - parallelogram.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DERP is a parallelogram."
        );
    });

    test("Rhombus", function() {
        let inputFile = new File(__dirname + 'input/03 - rhombus.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ABCD is a rhombus."
        );
    });

    test("Rectangle", function() {
        let inputFile = new File(__dirname + 'input/04 - rectangle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "EFGH is a rectangle."
        );
    });

    test("Square", function() {
        let inputFile = new File(__dirname + 'input/05 - square.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ABCD is a square."
        );
    });

    test("Everything", function() {
        let inputFile = new File(__dirname + 'input/06 - everything.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - everything.txt');
    });
});
