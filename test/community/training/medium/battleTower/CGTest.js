import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/battleTower/battleTower.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Battle tower", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Mini", function() {
        let inputFile = new File(__dirname + 'input/02 - mini.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Line", function() {
        let inputFile = new File(__dirname + 'input/03 - line.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Star", function() {
        let inputFile = new File(__dirname + 'input/04 - star.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Medium 1", function() {
        let inputFile = new File(__dirname + 'input/05 - medium 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test("Medium 2", function() {
        let inputFile = new File(__dirname + 'input/06 - medium 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            50
        );
    });

    test("Medium 3", function() {
        let inputFile = new File(__dirname + 'input/07 - medium 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            96
        );
    });

    test("Dense 1", function() {
        let inputFile = new File(__dirname + 'input/08 - dense 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            146
        );
    });

    test("Dense 2", function() {
        let inputFile = new File(__dirname + 'input/09 - dense 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            143
        );
    });

    test("Dense 3", function() {
        let inputFile = new File(__dirname + 'input/10 - dense 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            189
        );
    });
});
