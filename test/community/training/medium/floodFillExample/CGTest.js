import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/floodFillExample/floodFillExample.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Flood fill example", function() {
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

        assertOutputAnswer(__dirname + 'output/01 - test 1.txt');
    });

    test("Test 2", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - test 2.txt');
    });

    test("Test 3", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - test 3.txt');
    });

    test("Test 4", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - test 4.txt');
    });

    test("Test 5", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A+A"
        );
    });
});
