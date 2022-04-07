import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/graffitiOnTheFence/graffitiOnTheFence.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Graffiti on the fence", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("Overlapping 1", function() {
        let inputFile = new File(__dirname + 'input/02 - overlapping 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - overlapping 1.txt');
    });

    test("Overlapping 2", function() {
        let inputFile = new File(__dirname + 'input/03 - overlapping 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - overlapping 2.txt');
    });

    test("All painted", function() {
        let inputFile = new File(__dirname + 'input/04 - all painted.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "All painted"
        );
    });

    test("Continuous", function() {
        let inputFile = new File(__dirname + 'input/05 - continuous.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 2"
        );
    });

    test("Long fence 1", function() {
        let inputFile = new File(__dirname + 'input/06 - long fence 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - long fence 1.txt');
    });

    test("Long fence 2", function() {
        let inputFile = new File(__dirname + 'input/07 - long fence 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - long fence 2.txt');
    });

    test("Long fence 3", function() {
        let inputFile = new File(__dirname + 'input/08 - long fence 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - long fence 3.txt');
    });

    test("Long fence 4", function() {
        let inputFile = new File(__dirname + 'input/09 - long fence 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - long fence 4.txt');
    });

    test("Long fence 5", function() {
        let inputFile = new File(__dirname + 'input/10 - long fence 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - long fence 5.txt');
    });

    test("Long fence 5", function() {
        let inputFile = new File(__dirname + 'input/10 - long fence 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - long fence 5.txt');
    });

    test("Long fence 6", function() {
        let inputFile = new File(__dirname + 'input/11 - long fence 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - long fence 6.txt');
    });

    test("Minor test 1", function() {
        let inputFile = new File(__dirname + 'input/12 - minor test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6 7"
        );
    });

    test("Minor test 2", function() {
        let inputFile = new File(__dirname + 'input/13 - minor test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "All painted"
        );
    });
});
