import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/theRiverII/theRiverII.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The River II.", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Test 20', function() {
        let inputFile = new File(__dirname + 'input/01 - test 20.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test('The lucky 13', function() {
        let inputFile = new File(__dirname + 'input/02 - the lucky 13.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test('yyy', function() {
        let inputFile = new File(__dirname + 'input/03 - yyy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test('zzzz', function() {
        let inputFile = new File(__dirname + 'input/04 - zzzz.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test('Yes, please', function() {
        let inputFile = new File(__dirname + 'input/05 - yes, please.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test('4aaaa', function() {
        let inputFile = new File(__dirname + 'input/06 - 4aaaa.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test('BIG', function() {
        let inputFile = new File(__dirname + 'input/07 - BIG.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test('Maybe yes this time', function() {
        let inputFile = new File(__dirname + 'input/08 - maybe yes this time.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test('Random #1', function() {
        let inputFile = new File(__dirname + 'input/09 - random #1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test('Random #2', function() {
        let inputFile = new File(__dirname + 'input/10 - random #2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test('Random Large', function() {
        let inputFile = new File(__dirname + 'input/11 - random large.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test('Random Small', function() {
        let inputFile = new File(__dirname + 'input/12 - random small.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });
});
