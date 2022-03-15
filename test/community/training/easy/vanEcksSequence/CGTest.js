import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/vanEcksSequence/vanEcksSequence.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Van Eck's sequence", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Not Seen', function() {
        let inputFile = new File(__dirname + 'input/01 - not seen.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('Seen Before', function() {
        let inputFile = new File(__dirname + 'input/02 - seen before.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test('A little long', function() {
        let inputFile = new File(__dirname + 'input/03 - a little long.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test('Longer', function() {
        let inputFile = new File(__dirname + 'input/04 - longer.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test('A little stress', function() {
        let inputFile = new File(__dirname + 'input/05 - a little stress.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            29
        );
    });

    test('Stress Check', function() {
        let inputFile = new File(__dirname + 'input/06 - stress check.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            34143
        );
    });
});
