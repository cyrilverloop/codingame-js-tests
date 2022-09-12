import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theLostFiles/theLostFiles.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The lost files", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small example", function() {
        let inputFile = new File(__dirname + 'input/01 - small example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 4"
        );
    });

    test("Single continent with big tiles", function() {
        let inputFile = new File(__dirname + 'input/02 - single continent with big tiles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 16"
        );
    });

    test("Many islands", function() {
        let inputFile = new File(__dirname + 'input/03 - many islands.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "10 20"
        );
    });

    test("Complex map", function() {
        let inputFile = new File(__dirname + 'input/04 - complex map.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 130"
        );
    });
});
