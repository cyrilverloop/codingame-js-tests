import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/lumen/lumen.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Lumen", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("THEY only have one candle", function() {
        let inputFile = new File(__dirname + 'input/01 - THEY only have one candle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("THEY are doing a ritual", function() {
        let inputFile = new File(__dirname + 'input/02 - THEY are doing a ritual.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("THEY have a large pit", function() {
        let inputFile = new File(__dirname + 'input/03 - THEY have a large pit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("THEY have a small cellar", function() {
        let inputFile = new File(__dirname + 'input/04 - THEY have a small cellar.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("THEY have a medium cellar", function() {
        let inputFile = new File(__dirname + 'input/05 - THEY have a medium cellar.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            14
        );
    });

    test("THEY have a large cellar", function() {
        let inputFile = new File(__dirname + 'input/06 - THEY have a large cellar.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            34
        );
    });

    test("THEY are not very smart", function() {
        let inputFile = new File(__dirname + 'input/07 - THEY are not very smart.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("THEY have a great hall", function() {
        let inputFile = new File(__dirname + 'input/08 - THEY have a great hall.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            90
        );
    });

    test("Not Euclidean", function() {
        let inputFile = new File(__dirname + 'input/09 - Not Euclidean.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });
});
