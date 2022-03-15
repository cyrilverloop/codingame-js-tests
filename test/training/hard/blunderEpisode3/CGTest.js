import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/hard/blunderEpisode3/blunderEpisode3.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('Blunder - episode 3', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('O(1)', function() {
        let inputFile = new File(__dirname + 'input/01 - O(1).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(1)'
        );
    });

    test('O(log n)', function() {
        let inputFile = new File(__dirname + 'input/02 - O(log n).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(log n)'
        );
    });

    test('O(n)', function() {
        let inputFile = new File(__dirname + 'input/03 - O(n).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(n)'
        );
    });

    test('O(n log n)', function() {
        let inputFile = new File(__dirname + 'input/04 - O(n log n).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(n log n)'
        );
    });

    test('O(n^2)', function() {
        let inputFile = new File(__dirname + 'input/05 - O(n^2).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(n^2)'
        );
    });

    test('O(n^2 log n)', function() {
        let inputFile = new File(__dirname + 'input/06 - O(n^2 log n).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(n^2 log n)'
        );
    });

    test('O(n^3)', function() {
        let inputFile = new File(__dirname + 'input/07 - O(n^3).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(n^3)'
        );
    });

    test('O(2^n)', function() {
        let inputFile = new File(__dirname + 'input/08 - O(2^n).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'O(2^n)'
        );
    });
});
