import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/continuedFractions/continuedFractions.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Continued fractions", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("F -> CF", function() {
        let inputFile = new File(__dirname + 'input/01 - F -> CF.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "[1; 2, 3]"
        );
    });

    test("CF -> F", function() {
        let inputFile = new File(__dirname + 'input/02 - CF -> F.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "71/31"
        );
    });

    test("Small fraction", function() {
        let inputFile = new File(__dirname + 'input/03 - small fraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "[0; 1, 2, 2]"
        );
    });

    test("Small CF", function() {
        let inputFile = new File(__dirname + 'input/04 - small CF.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "19/24"
        );
    });

    test("Medium fraction", function() {
        let inputFile = new File(__dirname + 'input/05 - medium fraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "[7; 5, 1, 3, 1, 1, 2]"
        );
    });

    test("Medium CF", function() {
        let inputFile = new File(__dirname + 'input/06 - medium CF.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "13887/1117"
        );
    });

    test("Large fraction", function() {
        let inputFile = new File(__dirname + 'input/07 - large fraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "[6; 4, 20, 1, 25, 6]"
        );
    });

    test("Large CF", function() {
        let inputFile = new File(__dirname + 'input/08 - large CF.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "416779/119113"
        );
    });

    test("F -> Long CF", function() {
        let inputFile = new File(__dirname + 'input/09 - F -> long CF.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "[1; 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2]"
        );
    });

    test("Long CF -> F", function() {
        let inputFile = new File(__dirname + 'input/10 - Long CF -> F.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "500287/154989"
        );
    });

    test("Negative fraction", function() {
        let inputFile = new File(__dirname + 'input/11 - negative fraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "[-2; 1, 11]"
        );
    });

    test("Negative CF", function() {
        let inputFile = new File(__dirname + 'input/12 - negative CF.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-833719/265381"
        );
    });

    test("All together now", function() {
        let inputFile = new File(__dirname + 'input/13 - all together now.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-833719/265381"
        );
    });
});
