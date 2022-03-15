import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/medium/networkCabling/networkCabling.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('Network cabling', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example 1', function() {
        let inputFile = new File(__dirname + 'input/01 - example 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test('Example 2', function() {
        let inputFile = new File(__dirname + 'input/02 - example 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test('Example 3', function() {
        let inputFile = new File(__dirname + 'input/03 - example 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test('Example 4', function() {
        let inputFile = new File(__dirname + 'input/04 - example 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('Example 5', function() {
        let inputFile = new File(__dirname + 'input/05 - example 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18
        );
    });

    test('Example 6', function() {
        let inputFile = new File(__dirname + 'input/06 - example 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6066790161
        );
    });

    test('Example 7', function() {
        let inputFile = new File(__dirname + 'input/07 - example 7.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3142894
        );
    });

    test('Example 8', function() {
        let inputFile = new File(__dirname + 'input/08 - example 8.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2500049998
        );
    });

    test('Example 9', function() {
        let inputFile = new File(__dirname + 'input/09 - example 9.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2178614523
        );
    });
});
