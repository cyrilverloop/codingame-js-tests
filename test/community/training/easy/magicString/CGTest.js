import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/magicString/magicString.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Magic string", function() {
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
            "JESS"
        );
    });

    test("Louis", function() {
        let inputFile = new File(__dirname + 'input/02 - louis.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "LOUISVII"
        );
    });

    test("1-10", function() {
        let inputFile = new File(__dirname + 'input/03 - 1-10.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "P"
        );
    });

    test("Metals", function() {
        let inputFile = new File(__dirname + 'input/04 - metals.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "MN"
        );
    });

    test("Quick test 1", function() {
        let inputFile = new File(__dirname + 'input/05 - quick test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ABCH"
        );
    });

    test("Quick test 2", function() {
        let inputFile = new File(__dirname + 'input/06 - quick test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ABD"
        );
    });

    test("Quick test 3", function() {
        let inputFile = new File(__dirname + 'input/07 - quick test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A"
        );
    });

    test("Quick test 4", function() {
        let inputFile = new File(__dirname + 'input/08 - quick test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A"
        );
    });

    test("Quick test 5", function() {
        let inputFile = new File(__dirname + 'input/09 - quick test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Z"
        );
    });

    test("Tricky", function() {
        let inputFile = new File(__dirname + 'input/10 - tricky.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DIZZY"
        );
    });
});
