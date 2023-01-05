import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/countOfPrimesInANumberGrid/countOfPrimesInANumberGrid.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Count of primes in a number grid", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Test 1", function() {
        let inputFile = new File(__dirname + 'input/01 - test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("Much ado about nothing", function() {
        let inputFile = new File(__dirname + 'input/02 - much ado about nothing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Gordon Lee puzzle", function() {
        let inputFile = new File(__dirname + 'input/03 - gordon lee puzzle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            50
        );
    });

    test("Large", function() {
        let inputFile = new File(__dirname + 'input/04 - large.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            78
        );
    });

    test("Asymmetric", function() {
        let inputFile = new File(__dirname + 'input/05 - asymmetric.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            64
        );
    });
});
