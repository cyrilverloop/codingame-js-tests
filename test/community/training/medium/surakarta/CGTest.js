import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/surakarta/surakarta.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Surakarta", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Around the world", function() {
        let inputFile = new File(__dirname + 'input/01 - around the world.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Multiple ways", function() {
        let inputFile = new File(__dirname + 'input/02 - multiple ways.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Impossible", function() {
        let inputFile = new File(__dirname + 'input/03 - impossible.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Pass on yourself", function() {
        let inputFile = new File(__dirname + 'input/04 - pass on yourself.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Angles are not OK", function() {
        let inputFile = new File(__dirname + 'input/05 - angles are not OK.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("We have a problem", function() {
        let inputFile = new File(__dirname + 'input/06 - we have a problem.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("It works", function() {
        let inputFile = new File(__dirname + 'input/07 - it works.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Number test", function() {
        let inputFile = new File(__dirname + 'input/08 - number test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Crossway", function() {
        let inputFile = new File(__dirname + 'input/09 - crossway.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Real test", function() {
        let inputFile = new File(__dirname + 'input/10 - real test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });
});
