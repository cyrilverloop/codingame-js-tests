import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/areTheClumpsNormal/areTheClumpsNormal.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Are the clumps normal", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple normal", function() {
        let inputFile = new File(__dirname + 'input/01 - simple normal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Normal"
        );
    });

    test("Simple abnormal", function() {
        let inputFile = new File(__dirname + 'input/02 - simple abnormal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Abnormal at the last second", function() {
        let inputFile = new File(__dirname + 'input/03 - abnormal at the last second.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Wildly abnormal", function() {
        let inputFile = new File(__dirname + 'input/04 - wildly abnormal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("Bigger than 2^64 Normal", function() {
        let inputFile = new File(__dirname + 'input/05 - bigger than 2^64 Normal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Normal"
        );
    });

    test("Way bigger than 2^64 abnormal", function() {
        let inputFile = new File(__dirname + 'input/06 - way bigger than 2^64 abnormal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Lots of abnormal", function() {
        let inputFile = new File(__dirname + 'input/07 - lots of abnormal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Rep digit", function() {
        let inputFile = new File(__dirname + 'input/08 - rep digit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Normal"
        );
    });

    test("Take the first deviation", function() {
        let inputFile = new File(__dirname + 'input/09 - take the first deviation.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Maximum normal", function() {
        let inputFile = new File(__dirname + 'input/10 - maximum normal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Normal"
        );
    });

    test("Maximum abnormal", function() {
        let inputFile = new File(__dirname + 'input/11 - maximum abnormal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Humongous binary", function() {
        let inputFile = new File(__dirname + 'input/12 - humongous binary.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Normal"
        );
    });

    test("Cooldown", function() {
        let inputFile = new File(__dirname + 'input/13 - cooldown.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });
});
