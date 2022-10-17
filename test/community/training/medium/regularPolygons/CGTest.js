import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/regularPolygons/regularPolygons.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Regular polygons", function() {
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

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Shortest range", function() {
        let inputFile = new File(__dirname + 'input/02 - shortest range.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Short range", function() {
        let inputFile = new File(__dirname + 'input/03 - short range.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            88
        );
    });

    test("Medium range", function() {
        let inputFile = new File(__dirname + 'input/04 - medium range.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            199
        );
    });

    test("Long range", function() {
        let inputFile = new File(__dirname + 'input/05 - long range.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            494
        );
    });
});
