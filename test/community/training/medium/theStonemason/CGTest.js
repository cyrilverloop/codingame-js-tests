import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theStonemason/theStonemason.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The stonemason", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One", function() {
        let inputFile = new File(__dirname + 'input/01 - one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "C"
        );
    });

    test("Three", function() {
        let inputFile = new File(__dirname + 'input/02 - three.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2L 2R"
        );
    });

    test("Five", function() {
        let inputFile = new File(__dirname + 'input/03 - five.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3L 1R 4R"
        );
    });

    test("Seven", function() {
        let inputFile = new File(__dirname + 'input/04 - seven.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4L 4R"
        );
    });

    test("Nine", function() {
        let inputFile = new File(__dirname + 'input/05 - nine.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4L 1L 2R 4R"
        );
    });

    test("Eleven", function() {
        let inputFile = new File(__dirname + 'input/06 - eleven.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4L 2L C 2R 4R"
        );
    });

    test("Thirteen", function() {
        let inputFile = new File(__dirname + 'input/07 - thirteen.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5L 1L 3R 6R"
        );
    });

    test("Fifteen", function() {
        let inputFile = new File(__dirname + 'input/08 - fifteen.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5L 2L C 3R 6R"
        );
    });

    test("Hey hey", function() {
        let inputFile = new File(__dirname + 'input/09 - hey hey.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7L 2L 3R 5R 8R"
        );
    });
});
