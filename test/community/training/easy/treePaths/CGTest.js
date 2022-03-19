import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/treePaths/treePaths.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Tree paths", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Test 1', function() {
        let inputFile = new File(__dirname + 'input/01 - test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Left"
        );
    });

    test('Test 2', function() {
        let inputFile = new File(__dirname + 'input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Right"
        );
    });

    test('Test 3', function() {
        let inputFile = new File(__dirname + 'input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Root"
        );
    });

    test('Test 4', function() {
        let inputFile = new File(__dirname + 'input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Right Left"
        );
    });

    test('Test 5', function() {
        let inputFile = new File(__dirname + 'input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Right Right Left Left Left"
        );
    });
});
