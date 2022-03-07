import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/equivalentResistanceCircuitBuilding/equivalentResistanceCircuitBuilding.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Equivalent resistance, circuit building" puzzle.
 */
suite('Equivalent resistance, circuit building', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Series', function() {
        let inputFile = new File(__dirname + 'input/01 - series.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "30.0"
        );
    });

    test('Parallel', function() {
        let inputFile = new File(__dirname + 'input/02 - parallel.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11.1
        );
    });

    test('Combined (example diagram)', function() {
        let inputFile = new File(__dirname + 'input/03 - combined (example diagram).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10.7
        );
    });

    test('Complex', function() {
        let inputFile = new File(__dirname + 'input/04 - complex.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2.4
        );
    });

    test('More complex', function() {
        let inputFile = new File(__dirname + 'input/05 - more complex.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "45.0"
        );
    });

    test('5-pointed star', function() {
        let inputFile = new File(__dirname + 'input/06 - 5-pointed star.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "91.0"
        );
    });
});
