import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/caesarIsTheChief/caesarIsTheChief.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Caesar is the chief", function() {
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
            "WRONG MESSAGE"
        );
    });

    test("Test 2", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CHIEF"
        );
    });

    test("Test 3", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CHIEF IS WRONG"
        );
    });

    test("Test 4", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "WRONG MESSAGE"
        );
    });

    test("Test 5", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "WRONG MESSAGE"
        );
    });

    test("Test 6", function() {
        let inputFile = new File(__dirname + 'input/06 - test 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BATTLE LOST CHIEF"
        );
    });

    test("Test 7", function() {
        let inputFile = new File(__dirname + 'input/07 - test 7.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "WRONG MESSAGE"
        );
    });

    test("Test 8", function() {
        let inputFile = new File(__dirname + 'input/08 - test 8.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ZORGLUB IS THE BEST CHIEF"
        );
    });

    test("Test 9", function() {
        let inputFile = new File(__dirname + 'input/09 - test 9.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "LONG LIFE TO THE CHIEF"
        );
    });

    test("Test 10", function() {
        let inputFile = new File(__dirname + 'input/10 - test 10.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CHIEF IS CHIEF"
        );
    });

    test("Test 11", function() {
        let inputFile = new File(__dirname + 'input/11 - test 11.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "OUR CHIEF IS THE BEST"
        );
    });

    test("Test 12", function() {
        let inputFile = new File(__dirname + 'input/12 - test 12.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "WRONG MESSAGE"
        );
    });
});
