import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/lowResolutionWhatsTheShape/lowResolutionWhatsTheShape.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Low resolution: what's the shape?", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Rectangle", function() {
        let inputFile = new File(__dirname + 'input/01 - rectangle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Rectangle"
        );
    });

    test("Square", function() {
        let inputFile = new File(__dirname + 'input/02 - square.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Rectangle"
        );
    });

    test("Touching top isosceles", function() {
        let inputFile = new File(__dirname + 'input/03 - touching top isosceles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Triangle"
        );
    });

    test("Touching bottom non-isosceles", function() {
        let inputFile = new File(__dirname + 'input/04 - touching bottom non-isosceles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Triangle"
        );
    });

    test("Touching left only 'X' and '.'", function() {
        let inputFile = new File(__dirname + 'input/05 - touching left only X and dot.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Triangle"
        );
    });

    test("Touching right top - right angle", function() {
        let inputFile = new File(__dirname + 'input/06 - touching right top - right angle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Triangle"
        );
    });

    test("Circle small", function() {
        let inputFile = new File(__dirname + 'input/07 - circle small.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Ellipse"
        );
    });

    test("Circle big", function() {
        let inputFile = new File(__dirname + 'input/08 - circle big.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Ellipse"
        );
    });

    test("Ellipse 1", function() {
        let inputFile = new File(__dirname + 'input/09 - ellipse 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Ellipse"
        );
    });

    test("Ellipse 2", function() {
        let inputFile = new File(__dirname + 'input/10 - ellipse 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Ellipse"
        );
    });

    test("Ellipse 3", function() {
        let inputFile = new File(__dirname + 'input/11 - ellipse 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Ellipse"
        );
    });
});
